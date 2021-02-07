import PropTypes from "prop-types";
import React from "react";

interface CounterProps {
  id: string;
  updatePlayerScore: (
    id: string,
    delta: number
  ) => { type: string; id: string; delta: number };
  score: number;
}

const Counter = (props: CounterProps) => {
  return (
    <div className="counter">
      <button
        className="counter-action decrement"
        onClick={() => props.updatePlayerScore(props.id, -1)}
      >
        -
      </button>
      <div className="counter-score"> {props.score} </div>
      <button
        className="counter-action increment"
        onClick={() => props.updatePlayerScore(props.id, 1)}
      >
        +
      </button>
    </div>
  );
};

Counter.proptypes = {
  index: PropTypes.number.isRequired,
  score: PropTypes.number.isRequired,
  updatePlayerScore: PropTypes.func.isRequired,
};

export default Counter;
