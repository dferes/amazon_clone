import { createContext, useContext, useReducer } from 'react';

// Was going to use this in place of redux, but changed my mind. Use redux instead;
export const StateContext = createContext();

export const StateProvider = ({ reducer, initialState, children }) => (
  <StateContext.Provider value={useReducer(reducer, initialState)}>
    {children}
  </StateContext.Provider>
);

export const useStateValue = () => useContext(StateContext);
