import React from "react";

/**
 * PUBLIC_INTERFACE
 * Collapsible sidebar navigation.
 */
export default function Sidebar({ open = true }) {
  if (!open) return null;
  return (
    <aside
      style={{
        width: 240,
        borderRight: "1px solid var(--border)",
        padding: "1rem",
        background: "var(--bg-2)",
        minHeight: "calc(100vh - 56px)"
      }}
    >
      <nav style={{ display: "grid", gap: 8 }}>
        <a href="/dashboard">Overview</a>
        <a href="/dashboard#costs">Costs</a>
        <a href="/dashboard#reports">Reports</a>
        <a href="/dashboard#settings">Settings</a>
      </nav>
    </aside>
  );
}
