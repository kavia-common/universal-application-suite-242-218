import React from "react";
import AppShell from "../components/layout/AppShell";
import Card from "../components/common/Card";
import Button from "../components/common/Button";

/**
 * PUBLIC_INTERFACE
 * Landing page for the app.
 */
export default function Landing() {
  return (
    <AppShell>
      <h1>Welcome to AI Cloud Cost Optimizer</h1>
      <p>Monitor and optimize your cloud costs with insights and automation.</p>
      <div style={{ display: "grid", gap: 16, gridTemplateColumns: "repeat(auto-fit, minmax(220px, 1fr))" }}>
        <Card title="Get Started" footer={<Button>Learn More</Button>}>
          Kickstart your journey by connecting your cloud providers.
        </Card>
        <Card title="Analyze" footer={<Button variant="secondary">View Demo</Button>}>
          Explore dashboards that highlight spend, trends, and anomalies.
        </Card>
      </div>
    </AppShell>
  );
}
