import React, { createContext, useState } from 'react';

const Context = createContext();

export const DataProvider = ({ children }) => {
  const [entries, setEntries] = useState({
    diet: [],
    activities: [],
  });

  return (
    <Context.Provider value={{ entries, setEntries }}>
      {children}
    </Context.Provider>
  );
};

export const useDataContext = () => React.useContext(Context);
