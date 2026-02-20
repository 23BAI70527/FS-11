import { createContext, useReducer, useState } from "react";
import { appReducer, initialState } from "../reducer/appReducer";

export const AppContext = createContext();

export const AppProvider = ({ children }) => {
  const [state, dispatch] = useReducer(appReducer, initialState);
  const [theme, setTheme] = useState("light");

  const toggleTheme = () => {
    setTheme(theme === "light" ? "dark" : "light");
  };

  return (
    <AppContext.Provider
      value={{
        favorites: state.favorites,
        dispatch,
        theme,
        toggleTheme
      }}
    >
      {children}
    </AppContext.Provider>
  );
};