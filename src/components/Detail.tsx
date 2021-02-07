import { PlayerInterface } from "../types/Player";
import PropTypes from "prop-types";
import React from "react";

interface DetailProps {
  selectedPlayer: PlayerInterface | undefined;
}

export const Detail = ({ selectedPlayer }: DetailProps) => {
  return (
    <div className="player-detail">
      {selectedPlayer ? (
        <div className="player-detail">
          {selectedPlayer.name.normalize("NFC")}
          <ul className="player-detail">
            <li key="score">Score: {selectedPlayer.score}</li>
            <li key="created">
              Created on: {selectedPlayer.created_at.toLocaleString()}
            </li>
            <li key="updated">
              Updated on: {selectedPlayer.updated_at.toLocaleString()}
            </li>
          </ul>
        </div>
      ) : (
        <div className="player-detail">
          {"Select a player for more information"}
        </div>
      )}
    </div>
  );
};

Detail.proptypes = {
  selectedPlayer: PropTypes.shape({
    id: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    score: PropTypes.number.isRequired,
    created_at: PropTypes.instanceOf(Date).isRequired,
    updated_at: PropTypes.instanceOf(Date).isRequired,
  }),
};
