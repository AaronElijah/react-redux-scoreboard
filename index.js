import { PlayerReducer } from "./src/reducers/player";
import { Provider } from "react-redux";
import React from "react";
import Scoreboard from "./src/containers/Scoreboard";
import { createStore } from "redux";
import { render } from "react-dom";
require("/app.css");

const store = createStore(
  PlayerReducer,
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);

render(
  <Provider store={store}>
    <Scoreboard />
  </Provider>,
  document.getElementById("root")
);
