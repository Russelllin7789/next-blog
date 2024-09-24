"use client";

import { createContext, useState } from "react";

export const ThemeContext = createContext();

const getModeFromLocalStorage = () => {
  // get mode from local storage only if browser exists
  if (typeof window !== "undefined") {
    const value = localStorage.getItem("theme");
    return value || "light";
  }
};

export const ThemeContextProvider = ({ children }) => {
  const [theme, setTheme] = useState(() => getModeFromLocalStorage());

  return <ThemeContext.Provider>{children}</ThemeContext.Provider>;
};
