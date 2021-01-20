import { useState, useEffect, useReducer, createContext } from "react";
import { episode } from "./reducers/episode";
import { player } from "./reducers/player";

const initialState = {
  currentEpisode: null,
  isPlayerLoaded: false,
};

const Context = createContext({});

const combineReducers = (...reducers) => (state, action) => {
  for (let i = 0; i < reducers.length; i++) state = reducers[i](state, action);
  return state;
};

// context provider
const Provider = ({ children }) => {
  const [state, dispatch] = useReducer(combineReducers(episode,player), initialState);
  const value = { state, dispatch };

  return <Context.Provider value={value}>{children}</Context.Provider>;
};

export { Context, Provider };