import { useReducer, createContext } from 'react';
import { episode } from './reducers/episode';

const initialState = {
    currentEpisode: null
};

const Context = createContext({});

const combineReducers = (...reducers) => (state, action) => {
    for (let i = 0; i < reducers.length; i++) state = reducers[i](state, action);
    return state;
};

// context provider
const Provider = ({ children }) => {
    const [state, dispatch] = useReducer(combineReducers(episode), initialState);
    const value = { state, dispatch };

    return <Context.Provider value={value}>{children}</Context.Provider>;
};

export { Context, Provider };
