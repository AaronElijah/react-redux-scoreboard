import * as PlayerActions from "../actions/player";

import { AnyAction, Dispatch, bindActionCreators } from "redux";
import React, { Component } from "react";

import AddPlayerForm from "../components/AddPlayerForm";
import { Detail } from "../components/Detail";
import Header from "../components/Header";
import Player from "../components/Player";
import { PlayerInterface } from "../types/Player";
import PropTypes from "prop-types";
import { connect } from "react-redux";

interface ScoreboardProps {
  players: PlayerInterface[];
  selectedPlayerId: string | number;
  dispatch: Dispatch<AnyAction>;
}

interface boundActionCreatorInterface {
  addPlayer: (name: string) => { type: string; name: string };
  removePlayer: (id: string) => { type: string; id: string };
  updatePlayerScore: (
    id: string,
    delta: number
  ) => { type: string; id: string; delta: number };
  showPlayerDetail: (
    id: string
  ) => {
    type: string;
    id: string;
  };
}

interface StateToProps {
  players: PlayerInterface[];
  selectedPlayerId: string | number;
}

export class Scoreboard extends Component<ScoreboardProps> {
  public static propTypes = {};
  boundActionCreators: boundActionCreatorInterface;

  constructor(props: ScoreboardProps) {
    super(props);
    const { dispatch, players, selectedPlayerId } = props;
    this.boundActionCreators = (bindActionCreators(
      {
        addPlayer: PlayerActions.addPlayer,
        removePlayer: PlayerActions.removePlayer,
        updatePlayerScore: PlayerActions.updatePlayerScore,
        showPlayerDetail: PlayerActions.showPlayerDetail,
      },
      dispatch
    ) as unknown) as boundActionCreatorInterface;
  }

  render = () => {
    const { dispatch, players, selectedPlayerId } = this.props;
    const addPlayer = this.boundActionCreators.addPlayer;
    const removePlayer = this.boundActionCreators.removePlayer;
    const updatePlayerScore = this.boundActionCreators.updatePlayerScore;
    const showPlayerDetail = this.boundActionCreators.showPlayerDetail;

    const playerComponents = players.map((player) => {
      return (
        <Player
          id={player.id}
          name={player.name}
          score={player.score}
          key={player.id}
          updatePlayerScore={updatePlayerScore}
          removePlayer={removePlayer}
          onClickPlayerDetail={() => showPlayerDetail(player.id)}
        />
      );
    });

    return (
      <div className="scoreboard">
        <Header players={players} />
        <div className="players">{playerComponents}</div>
        <AddPlayerForm addPlayer={addPlayer} />
        <Detail
          selectedPlayer={players.find(
            (player) => player.id === selectedPlayerId
          )}
        />
      </div>
    );
  };
}

Scoreboard.propTypes = {
  players: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      name: PropTypes.string.isRequired,
      score: PropTypes.number.isRequired,
    })
  ).isRequired,
  selectedPlayerId: PropTypes.oneOfType([PropTypes.number, PropTypes.string]),
  dispatch: PropTypes.func.isRequired,
};

const mapStateToProps = (state: StateToProps) => ({
  players: state.players,
  selectedPlayerId: state.selectedPlayerId,
});

export default connect(mapStateToProps)(Scoreboard);
