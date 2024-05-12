import React, { createContext, useContext } from "react";

export const themeContext = createContext({
  defaultTheme: "light",
  darkMode: () => {},
  lightMode: () => {},
});

export const ThemeContextProvider = themeContext.Provider;

export const useTheme = () => {
  return useContext(themeContext);
};
