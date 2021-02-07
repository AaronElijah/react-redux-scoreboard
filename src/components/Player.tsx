import Counter from "./Counter";
import PropTypes from "prop-types";
import React from "react";

interface PlayerProps {
  id: string;
  score: number;
  name: string;
  removePlayer: (id: string) => { type: string; id: string };
  onClickPlayerDetail: () => { type: string; id: string };
  updatePlayerScore: (
    id: string,
    delta: number
  ) => { type: string; id: string; delta: number };
}

const Player = ({
  id,
  name,
  score,
  onClickPlayerDetail,
  updatePlayerScore,
  removePlayer,
}: PlayerProps) => {
  return (
    <div className="player">
      <div className="player-name">
        <a
          className="remove-player"
          onClick={() => {
            removePlayer(id);
          }}
        >
          ✖
        </a>
        <a onClick={onClickPlayerDetail} style={{ cursor: "pointer" }}>
          {name}
        </a>
      </div>
      <div className="player-score">
        <Counter updatePlayerScore={updatePlayerScore} score={score} id={id} />
      </div>
    </div>
  );
};

Player.proptypes = {
  removePlayer: PropTypes.func.isRequired,
  updatePlayerScore: PropTypes.func.isRequired,
  onClickPlayerDetail: PropTypes.func.isRequired,
  score: PropTypes.number.isRequired,
  index: PropTypes.number.isRequired,
  name: PropTypes.string.isRequired,
};

export default Player;
