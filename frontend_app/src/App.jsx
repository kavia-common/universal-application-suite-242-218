import { useEffect, useState } from "react";
import "./styles.css";

// PUBLIC_INTERFACE
export default function App() {
  /** App with simple theme toggle to verify rendering works */
  const [theme, setTheme] = useState("light");

  useEffect(() => {
    document.documentElement.setAttribute("data-theme", theme);
  }, [theme]);

  return (
    <div className="app">
      <header className="header">
        <button
          className="theme-toggle"
          onClick={() => setTheme((t) => (t === "light" ? "dark" : "light"))}
          aria-label={`Switch to ${theme === "light" ? "dark" : "light"} mode`}
        >
          {theme === "light" ? "🌙 Dark" : "☀️ Light"}
        </button>
        <h1>Vite + React</h1>
        <p>
          Edit <code>src/App.jsx</code> and save to test HMR.
        </p>
        <a
          className="link"
          href="https://vitejs.dev/guide/"
          target="_blank"
          rel="noreferrer"
        >
          Vite Docs
        </a>
        {" • "}
        <a
          className="link"
          href="https://react.dev/"
          target="_blank"
          rel="noreferrer"
        >
          React Docs
        </a>
      </header>
      <main className="content">
        <p>Theme: <strong>{theme}</strong></p>
      </main>
    </div>
  );
}
