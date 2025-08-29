import React from "react";

/**
 * PUBLIC_INTERFACE
 * Minimal loader spinner.
 */
export default function Loader({ label = "Loading..." }) {
  return (
    <div style={{ display: "inline-flex", alignItems: "center", gap: 8 }}>
      <span
        aria-hidden="true"
        style={{
          width: 14,
          height: 14,
          border: "2px solid var(--border)",
          borderTopColor: "var(--color-primary)",
          borderRadius: "50%",
          display: "inline-block",
          animation: "spin 0.8s linear infinite"
        }}
      />
      <span>{label}</span>
      <style>{`@keyframes spin { to { transform: rotate(360deg) } }`}</style>
    </div>
  );
}
