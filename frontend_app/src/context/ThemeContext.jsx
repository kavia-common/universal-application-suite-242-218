import React, { createContext, useEffect, useMemo, useState } from "react";

/**
 * PUBLIC_INTERFACE
 * ThemeContext provides light/dark theme state.
 */
export const ThemeContext = createContext({
  theme: "light",
  toggle: () => {}
});

export function ThemeProvider({ children }) {
  const [theme, setTheme] = useState("light");

  useEffect(() => {
    document.documentElement.setAttribute("data-theme", theme);
  }, [theme]);

  const value = useMemo(
    () => ({
      theme,
      toggle: () => setTheme((t) => (t === "light" ? "dark" : "light"))
    }),
    [theme]
  );

  return <ThemeContext.Provider value={value}>{children}</ThemeContext.Provider>;
}
