import React from "react";

/**
 * PUBLIC_INTERFACE
 * A minimal button component with variant support.
 */
export default function Button({ children, variant = "primary", ...props }) {
  return (
    <button
      {...props}
      className={`btn btn-${variant}`}
      style={{
        border: "1px solid var(--border)",
        background: variant === "primary" ? "var(--color-primary)" : "var(--bg)",
        color: variant === "primary" ? "#fff" : "var(--text)",
        borderRadius: 8,
        padding: "0.5rem 0.875rem",
        cursor: "pointer"
      }}
    >
      {children}
    </button>
  );
}
