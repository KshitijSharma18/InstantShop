import React, { createContext, useContext, useReducer } from "react";

// Making of data layer
export const StateContext = createContext();

// Wrap our app and provide data layer
export const StateProvider = ({ reducer, initialState, children }) => {
  return (
    <StateContext.Provider value={useReducer(reducer, initialState)}>
      {children}
    </StateContext.Provider>
  );
};

//Pull info from data layer
export const useStateValue = () => useContext(StateContext);
