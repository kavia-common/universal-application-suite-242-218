import React from "react";
import AppShell from "../../components/layout/AppShell";
import Button from "../../components/common/Button";

/**
 * PUBLIC_INTERFACE
 * Register page.
 */
export default function Register() {
  return (
    <AppShell>
      <h1>Create Account</h1>
      <form style={{ display: "grid", gap: 12, maxWidth: 360 }}>
        <input type="text" placeholder="Full name" required style={{ padding: "0.5rem" }} />
        <input type="email" placeholder="Email" required style={{ padding: "0.5rem" }} />
        <input type="password" placeholder="Password" required style={{ padding: "0.5rem" }} />
        <Button type="submit">Sign Up</Button>
      </form>
    </AppShell>
  );
}
