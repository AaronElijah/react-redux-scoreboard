import {
  ADD_PLAYER,
  REMOVE_PLAYER,
  SHOW_PLAYER_DETAIL,
  UPDATE_PLAYER_SCORE,
} from "../actiontypes/player";

import { PlayerInterface } from "../types/Player";
import { v5 as uuidv5 } from "uuid";

const NAMESPACE_UUID = "2426f9b3-c516-47fd-898f-e84932b4c121";

export interface AddPlayerAction {
  type: typeof ADD_PLAYER;
  name: string;
}

export interface RemovePlayerAction {
  type: typeof REMOVE_PLAYER;
  id: string;
}

export interface UpdatePlayerScoreAction {
  type: typeof UPDATE_PLAYER_SCORE;
  id: string;
  delta: number;
}

export interface ShowPlayerDetailAction {
  type: typeof SHOW_PLAYER_DETAIL;
  id: string;
}

export type ActionTypes =
  | AddPlayerAction
  | RemovePlayerAction
  | UpdatePlayerScoreAction
  | ShowPlayerDetailAction;

export interface StoreState {
  players: PlayerInterface[];
  selectedPlayerId: number | string;
}

const initialState: StoreState = {
  players: [
    {
      id: uuidv5("Jim Hoskins", NAMESPACE_UUID),
      name: "Jim Hoskins",
      score: 31,
      created_at: new Date(),
      updated_at: new Date(),
    },
    {
      id: uuidv5("Andrew Chalkley", NAMESPACE_UUID),
      name: "Andrew Chalkley",
      score: 20,
      created_at: new Date(),
      updated_at: new Date(),
    },
    {
      id: uuidv5("Alena Holligan", NAMESPACE_UUID),
      name: "Alena Holligan",
      score: 50,
      created_at: new Date(),
      updated_at: new Date(),
    },
  ],
  selectedPlayerId: -1,
};

export function PlayerReducer(
  state: StoreState = initialState,
  action: ActionTypes
) {
  switch (action.type) {
    case ADD_PLAYER:
      const latestPlayers = [
        ...state.players,
        {
          id: uuidv5(action.name, NAMESPACE_UUID),
          name: action.name,
          score: 0,
          created_at: new Date(),
          updated_at: new Date(),
        },
      ];
      return { ...state, players: latestPlayers };

    case REMOVE_PLAYER:
      const remainingPlayers = state.players.filter((player) => {
        if (player.id === action.id) {
          return false;
        } else {
          return true;
        }
      });
      return { ...state, players: remainingPlayers };

    case UPDATE_PLAYER_SCORE:
      const updatedPlayers = state.players.map((player) => {
        if (player.id === action.id) {
          const newScore = (player.score += action.delta);
          return { ...player, score: newScore, updated_at: new Date() };
        } else {
          return player;
        }
      });
      return { ...state, players: updatedPlayers };

    case SHOW_PLAYER_DETAIL:
      if (state.selectedPlayerId !== action.id) {
        return { ...state, selectedPlayerId: action.id };
      } else {
        return { ...state, selectedPlayerId: -1 };
      }

    default:
      return state;
  }
}
