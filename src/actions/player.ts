import {
  ADD_PLAYER,
  REMOVE_PLAYER,
  SHOW_PLAYER_DETAIL,
  UPDATE_PLAYER_SCORE,
} from "../actiontypes/player";

export const addPlayer = (name: string) => {
  return {
    type: ADD_PLAYER,
    name,
  };
};

export const removePlayer = (id: string) => {
  return {
    type: REMOVE_PLAYER,
    id,
  };
};

export const updatePlayerScore = (id: string, delta: number) => {
  return {
    type: UPDATE_PLAYER_SCORE,
    id,
    delta,
  };
};

export const showPlayerDetail = (id: string) => {
  return {
    type: SHOW_PLAYER_DETAIL,
    id,
  };
};
