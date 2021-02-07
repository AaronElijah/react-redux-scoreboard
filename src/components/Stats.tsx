import { PlayerInterface } from "../types/Player";
import PropTypes from "prop-types";
import React from "react";

interface StatsProps {
  players: PlayerInterface[];
}

const Stats = ({ players }: StatsProps) => {
  const playerCount = players.length;
  const totalPoints = players.reduce(function (total, player) {
    return total + player.score;
  }, 0);

  return (
    <table className="stats">
      <tbody>
        <tr>
          <td>Players:</td>
          <td>{playerCount}</td>
        </tr>
        <tr>
          <td>Total Points:</td>
          <td>{totalPoints}</td>
        </tr>
      </tbody>
    </table>
  );
};

Stats.proptypes = {
  players: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      name: PropTypes.string.isRequired,
      score: PropTypes.number.isRequired,
      created_at: PropTypes.instanceOf(Date).isRequired,
      updated_at: PropTypes.instanceOf(Date).isRequired,
    })
  ).isRequired,
};

export default Stats;
