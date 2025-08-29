import React, { createContext, useMemo, useState } from "react";

/**
 * PUBLIC_INTERFACE
 * AuthContext provides minimal authentication state and actions.
 */
export const AuthContext = createContext({
  user: null,
  login: async () => {},
  logout: () => {}
});

export function AuthProvider({ children }) {
  const [user, setUser] = useState(null);

  const value = useMemo(
    () => ({
      user,
      login: async (email, password) => {
        // TODO: wire to authService
        setUser({ id: "1", name: "Demo User", email });
      },
      logout: () => setUser(null)
    }),
    [user]
  );

  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
}
