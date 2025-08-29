import { useContext } from "react";
import { AuthContext } from "../context/AuthContext.jsx";

/**
 * PUBLIC_INTERFACE
 * Access auth context hook.
 */
export function useAuth() {
  return useContext(AuthContext);
}
