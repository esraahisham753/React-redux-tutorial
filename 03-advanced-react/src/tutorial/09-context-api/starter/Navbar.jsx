import { createContext, useContext } from "react";
import NavLinks from "./NavLinks";
import useLog from "./useLog";

export const navbarContext = createContext();

export const useAppContext = () => useContext(navbarContext);

const Navbar = () => {
  const { user, login, logout } = useLog();

  return (
    <navbarContext.Provider value={{ user, login, logout }}>
      <nav className="navbar">
        <NavLinks />
      </nav>
    </navbarContext.Provider>
  );
};

export default Navbar;
