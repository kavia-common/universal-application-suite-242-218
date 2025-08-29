import React from "react";
import AppShell from "../../components/layout/AppShell";
import Button from "../../components/common/Button";

/**
 * PUBLIC_INTERFACE
 * Login page.
 */
export default function Login() {
  return (
    <AppShell>
      <h1>Login</h1>
      <form style={{ display: "grid", gap: 12, maxWidth: 360 }}>
        <input type="email" placeholder="Email" required style={{ padding: "0.5rem" }} />
        <input type="password" placeholder="Password" required style={{ padding: "0.5rem" }} />
        <Button type="submit">Sign In</Button>
      </form>
    </AppShell>
  );
}
