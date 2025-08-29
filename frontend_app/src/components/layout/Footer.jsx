import React from "react";

/**
 * PUBLIC_INTERFACE
 * Application footer.
 */
export default function Footer() {
  return (
    <footer
      style={{
        borderTop: "1px solid var(--border)",
        padding: "0.75rem 1rem",
        textAlign: "center",
        background: "var(--bg-2)"
      }}
    >
      <small>&copy; {new Date().getFullYear()} AI Cloud Cost Optimizer</small>
    </footer>
  );
}
