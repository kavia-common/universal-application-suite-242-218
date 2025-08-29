import React from "react";
import AppShell from "../components/layout/AppShell";
import Card from "../components/common/Card";

/**
 * PUBLIC_INTERFACE
 * Dashboard page.
 */
export default function Dashboard() {
  return (
    <AppShell>
      <h1>Dashboard</h1>
      <div style={{ display: "grid", gap: 16, gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))" }}>
        <Card title="Monthly Spend">$12,340</Card>
        <Card title="Forecast Next Month">$13,100</Card>
        <Card title="Optimization Opportunities">7 recommendations</Card>
      </div>
    </AppShell>
  );
}
