import React from "react";

/**
 * PUBLIC_INTERFACE
 * Simple card container component.
 */
export default function Card({ title, children, footer }) {
  return (
    <div
      style={{
        background: "var(--bg-2)",
        border: "1px solid var(--border)",
        borderRadius: 12,
        padding: "1rem",
        textAlign: "left"
      }}
    >
      {title && <h3 style={{ marginTop: 0 }}>{title}</h3>}
      <div>{children}</div>
      {footer && <div style={{ borderTop: "1px solid var(--border)", marginTop: "0.75rem", paddingTop: "0.75rem" }}>{footer}</div>}
    </div>
  );
}
