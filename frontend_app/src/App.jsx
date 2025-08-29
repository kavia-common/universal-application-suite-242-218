import React from "react";
import AppShell from "./components/layout/AppShell";
import Landing from "./pages/Landing";
import { ThemeProvider } from "./context/ThemeContext.jsx";
import { AuthProvider } from "./context/AuthContext.jsx";

// PUBLIC_INTERFACE
export default function App() {
  /**
   * Root app component wrapping providers and rendering the landing page.
   * Future routing will replace direct Landing render.
   */
  return (
    <ThemeProvider>
      <AuthProvider>
        <AppShell>
          <Landing />
        </AppShell>
      </AuthProvider>
    </ThemeProvider>
  );
}
