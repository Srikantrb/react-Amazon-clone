import React, { useContext, useReducer, createContext } from "react";

//prepares the data layer
export const Statecontext = createContext();

//wrap our app component and provides the data layer
export const Stateprovider = ({ initialstate, children, reducer }) => (
  <Statecontext.Provider value={useReducer(reducer, initialstate)}>
    {children}
  </Statecontext.Provider>
);

//pull the data from the data layer
export const useStatevalue = () => useContext(Statecontext);
