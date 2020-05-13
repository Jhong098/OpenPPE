import React, { useReducer, useContext } from "react";

const SidebarContext = React.createContext();

const initialState = {
  isOpen: false,
  renderedComponent: null
};

const reducer = (state, action) => {
  switch (action.type) {
    case "CLOSE":
      return {
        ...state,
        isOpen: false,
        renderedComponent: null
      };
    case "OPEN":
      return {
        ...state,
        isOpen: true,
        renderedComponent: action.payload
      };
    case "TOGGLE":
      if(state.renderedComponent !== action.payload){ //not open or other component is open
        return {
          ...state,
          isOpen: true,
          renderedComponent: action.payload
        };
      } else if(state.isOpen) { //component is already on
        return {
          ...state,
          isOpen: false,
          renderedComponent: null
        };
      }
    default:
      throw new Error(`Unknown action: ${action.type}`);
  }
};

export const SidebarProvider = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, initialState);
  return (
    <SidebarContext.Provider value={[state, dispatch]}>
      {children}
    </SidebarContext.Provider>
  );
};

export const useSidebar = () => useContext(SidebarContext);
