import { PlayerInterface } from "../types/Player";
import PropTypes from "prop-types";
import React from "react";
import Stats from "./Stats";
import Stopwatch from "./Stopwatch";

interface HeaderProps {
  players: PlayerInterface[];
}

const Header = ({ players }: HeaderProps) => {
  return (
    <div className="header">
      <Stats players={players} />
      <h1>Scoreboard</h1>
      <Stopwatch />
    </div>
  );
};

Header.proptypes = {
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

export default Header;
