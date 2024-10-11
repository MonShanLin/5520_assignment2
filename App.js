import React, { createContext, useState } from 'react';

const DataContext = createContext();

export default function DataProvider({ children }) {
  const [entries, setEntries] = useState({
    diet: [],
    activities: [],
  });

  return (
    <DataContext.Provider value={{ entries, setEntries }}>
      {children}
    </DataContext.Provider>
  );
}

export const useDataContext = () => React.useContext(DataContext);
