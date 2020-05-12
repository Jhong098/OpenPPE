import React, { useReducer, useContext } from "react";

const RequestsContext = React.createContext();

const initialState = {
  options: {},
  filters: { categories: "", sizes: "", statuses: "" },
  requests: [],
  message: "", // ok/error
};

// TODO: move this to the server
const getFilters = (requests) => {
  const categories = new Set();
  const sizes = new Set();
  const statuses = new Set();
  for (let i = 0; i < requests.length; i++) {
    categories.add(requests[i].category);
    sizes.add(requests[i].size);
    statuses.add(requests[i].size);
  }
  return {
    categories: Array.from(categories),
    sizes: Array.from(sizes),
    statuses: Array.from(statuses),
  };
};

const reducer = (state, action) => {
  switch (action.type) {
    case "FILTER_REQUESTS":
      console.log(action.payload);
      return {
        ...state,
        filters: { ...state.filters, ...action.payload },
      };
    case "FETCH_REQUESTS":
      console.log(action.payload);
      return {
        ...state,
        requests: action.payload,
        options: getFilters(action.payload),
      };
    case "FETCH_ERROR":
      return {
        ...state,
        message: action.payload,
      };
    default:
      throw new Error(`Unknown action: ${action.type}`);
  }
};

export const RequestsProvider = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, initialState);
  return (
    <RequestsContext.Provider value={[state, dispatch]}>
      {children}
    </RequestsContext.Provider>
  );
};

export const useRequests = () => useContext(RequestsContext);
