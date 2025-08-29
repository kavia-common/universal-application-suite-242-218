import React from "react";
import Button from "../common/Button";

/**
 * PUBLIC_INTERFACE
 * Top navigation bar.
 */
export default function TopNav({ title = "AI Cloud Cost Optimizer", onToggleSidebar }) {
  return (
    <header
      style={{
        background: "var(--bg-2)",
        borderBottom: "1px solid var(--border)",
        padding: "0.75rem 1rem",
        display: "flex",
        alignItems: "center",
        justifyContent: "space-between"
      }}
    >
      <div style={{ display: "flex", alignItems: "center", gap: 12 }}>
        <Button variant="secondary" onClick={onToggleSidebar} aria-label="Toggle sidebar">
          ☰
        </Button>
        <strong>{title}</strong>
      </div>
      <nav style={{ display: "flex", gap: 12 }}>
        <a href="/">Home</a>
        <a href="/dashboard">Dashboard</a>
        <a href="/profile">Profile</a>
      </nav>
    </header>
  );
}
