import React, { useEffect, useMemo, useState } from "react";
import { ThemeContext, type Theme } from "./ThemeContext";

const STORAGE_KEY = "ac-theme";

function getInitialTheme(): Theme {
   const saved = localStorage.getItem(STORAGE_KEY);
   if (saved === "light" || saved === "dark") return saved;

   const prefersDark = window.matchMedia(
      "(prefers-color-scheme: dark)",
   ).matches;
   return prefersDark ? "dark" : "light";
}

export function ThemeProvider({ children }: { children: React.ReactNode }) {
   const [theme, setTheme] = useState<Theme>(() => getInitialTheme());

   useEffect(() => {
      document.documentElement.setAttribute("data-theme", theme);
      localStorage.setItem(STORAGE_KEY, theme);
   }, [theme]);

   const value = useMemo(
      () => ({
         theme,
         setTheme,
         toggleTheme: () =>
            setTheme((prev) => (prev === "dark" ? "light" : "dark")),
      }),
      [theme],
   );

   return (
      <ThemeContext.Provider value={value}>{children}</ThemeContext.Provider>
   );
}
