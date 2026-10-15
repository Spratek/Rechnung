import { useEffect, useRef } from "react";
import shellHtml from "./legacy/shell.html?raw";
import { startApp } from "./legacy/app.js";

/**
 * RepairMobile Werkbank
 * Die App-Oberfläche (Header, Tab-Leiste, Sheets, Viewer) kommt aus shell.html,
 * die komplette Logik aus legacy/app.js. React stellt nur den Rahmen bereit.
 */
export default function App() {
  const ref = useRef(null);
  useEffect(() => {
    if (ref.current && !ref.current.dataset.mounted) {
      ref.current.innerHTML = shellHtml;
      ref.current.dataset.mounted = "1";
      startApp();
    }
  }, []);
  return <div ref={ref} id="app" />;
}
