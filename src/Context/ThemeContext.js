
import React,{createContext,useReducer } from "react";
export const cartContext = React.createContext();

export const StateProvider = ({ reducer, initialState, children }) => (
  <cartContext.Provider value={useReducer(reducer, initialState)}>
    {children}
  </cartContext.Provider>
);

export default createContext(null);