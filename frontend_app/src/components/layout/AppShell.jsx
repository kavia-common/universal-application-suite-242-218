import React, { useState } from "react";
import TopNav from "./TopNav";
import Sidebar from "./Sidebar";
import Footer from "./Footer";

/**
 * PUBLIC_INTERFACE
 * AppShell provides the top-level layout with TopNav, Sidebar, and main content area.
 */
export default function AppShell({ children }) {
  const [sidebarOpen, setSidebarOpen] = useState(true);
  return (
    <div className="app" style={{ minHeight: "100%", display: "flex", flexDirection: "column" }}>
      <TopNav onToggleSidebar={() => setSidebarOpen((s) => !s)} />
      <div style={{ display: "flex", flex: 1 }}>
        <Sidebar open={sidebarOpen} />
        <main style={{ padding: "1rem", flex: 1 }}>{children}</main>
      </div>
      <Footer />
    </div>
  );
}
