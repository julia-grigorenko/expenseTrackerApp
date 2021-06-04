import React, { createContext } from 'react';


// Initial state
const initialState = {
  transactions: []
}

// Create context
export const GlobalContext = createContext(initialState);

// Provider component
export const GlobalProvider = ({ children }) => {
  
  return (<GlobalContext.Provider value={{transactions: GlobalContext.transactions}}>
            {children}
          </GlobalContext.Provider>
    );
}
