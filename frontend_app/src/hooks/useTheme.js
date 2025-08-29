import { useContext } from "react";
import { ThemeContext } from "../context/ThemeContext.jsx";

/**
 * PUBLIC_INTERFACE
 * Access theme context hook.
 */
export function useTheme() {
  return useContext(ThemeContext);
}
