

//we need this to keep track of the basket

import { createContext,useContext,useReducer } from "react";

 //this is the Data layer
const StateContex = createContext();

//BUILD A PROVIDER
export const StateProvider = ({reducer,initialState,children})=>(
    <StateContex.Provider value={useReducer(reducer,initialState)}>
          {children}
    </StateContex.Provider>
) 

//this is how we use it inside of a component
export const useStateValue = () =>useContext(StateContex);