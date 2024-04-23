import React from "react";
import Footer from "./Footer";

export default function HomePage() {
  return (
    <div
      style={{ display: "flex", flexDirection: "column", minHeight: "100vh" }}
    >
      <main style={{ flexGrow: 1 }}>{/* Your main content */}</main>
      <Footer />
    </div>
  );
}
