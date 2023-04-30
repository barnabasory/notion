import { createContext, useState } from "react";

export const DataContext = createContext();
const Context = ({ children }) => {
  const [showMenu, setShowMenu] = useState(false);
  return (
    <div>
      <DataContext.Provider value={{ showMenu, setShowMenu }}>
        {children}
      </DataContext.Provider>
    </div>
  );
};

export default Context;
