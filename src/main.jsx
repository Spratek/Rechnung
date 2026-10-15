import React from "react";
import { createRoot } from "react-dom/client";
import { jsPDF } from "jspdf";
import JSZip from "jszip";
import App from "./App.jsx";
import "./styles.css";

// PDF- und ZIP-Erzeugung erwarten diese global (wie vorher über das CDN).
window.jspdf = { jsPDF };
window.JSZip = JSZip;

// Läuft die App vom Home-Bildschirm? Dann Klasse setzen (für Statusleiste & Abstände).
const standalone = window.navigator.standalone === true || window.matchMedia("(display-mode: standalone)").matches;
document.documentElement.classList.toggle("is-standalone", standalone);

createRoot(document.getElementById("root")).render(<App />);

if (import.meta.env.PROD) {
  // Offline-Fähigkeit
  if ("serviceWorker" in navigator) {
    window.addEventListener("load", () => {
      navigator.serviceWorker.register("./sw.js").catch(() => {});
    });
  }
  // Browser bitten, die App-Daten dauerhaft zu behalten (nicht automatisch löschen)
  navigator.storage?.persist?.().catch(() => {});
}
