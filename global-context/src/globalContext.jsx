import { useState, createContext, useContext } from "react";

const appContext = createContext();

export const useGlobalContext = () => useContext(appContext);

const AppContext = ({ children }) => {
  const [name, setName] = useState("esraa");

  return (
    <appContext.Provider value={{ name, setName }}>
      {children}
    </appContext.Provider>
  );
};

export default AppContext;
