# RepairMobile Werkbank

Aufträge, Kalender, Kunden, Ersatzteile, Rechnungen, Angebote und Kostenvoranschläge
für den Handy-Reparaturbetrieb RepairMobile. Läuft komplett im Browser, auch auf dem iPhone.

## Lokal starten

```bash
npm install
npm run dev
```

Dann die angezeigte Adresse (meist http://localhost:5173) im Browser öffnen.

## Fertige Version bauen

```bash
npm run build
```

Das Ergebnis liegt im Ordner `dist/` und kann auf jeden Webspace hochgeladen werden.

## Auf GitHub Pages veröffentlichen

1. Neues Repository auf GitHub anlegen und alle Dateien dieses Ordners hochladen
   (Branch `main`).
2. Im Repository: **Settings → Pages → Build and deployment → Source: „GitHub Actions“**.
3. Der Workflow unter `.github/workflows/deploy.yml` baut die App bei jedem Push
   automatisch. Nach 1–2 Minuten ist sie unter
   `https://<dein-name>.github.io/<repository>/` erreichbar.

## Als App aufs iPhone

1. Die GitHub-Pages-Adresse in **Safari** öffnen.
2. Teilen-Symbol → **Zum Home-Bildschirm** → **Hinzufügen**.
3. Ab jetzt die Werkbank **nur noch über das Icon** starten: Vollbild ohne Safari-Leisten,
   eigener Startbildschirm, funktioniert auch ohne Internet.

Wichtig: Die App vom Home-Bildschirm hat **eigene Daten**, getrennt von Safari.
Wer vorher schon in Safari gearbeitet hat: dort *Backup herunterladen*, in der App
*Backup wiederherstellen*.

## Daten

- Alle Daten werden im **Browser des jeweiligen Geräts** gespeichert (localStorage).
  Handy und PC haben also getrennte Daten.
- **Einstellungen → Datensicherung → Backup herunterladen** sichert alles in eine JSON-Datei,
  **Backup wiederherstellen** spielt sie (auch auf einem anderen Gerät) wieder ein.
- Browserdaten löschen = App-Daten weg. Deshalb regelmäßig ein Backup ziehen.

## Projektaufbau

```
index.html                 Einstieg, Schriften, Icons
vite.config.js             Vite + React, relative Pfade für GitHub Pages
src/main.jsx               startet React, stellt jsPDF bereit
src/App.jsx                bindet die App-Oberfläche ein und startet die Logik
src/styles.css             komplettes Design (Farben, Hell/Dunkel, PDF-Blatt)
src/legacy/shell.html      Grundgerüst: Kopfzeile, Tab-Leiste, Sheets, Viewer
src/legacy/app.js          gesamte App-Logik (Aufträge, Kalender, Rechnungen, PDF …)
src/assets/brandLogo.js    RepairMobile-Logo
public/favicon.svg         Browser-Icon
public/apple-touch-icon.png  App-Icon fürs iPhone (180 × 180)
public/icons/              Icons fürs Manifest (192, 512, maskable)
public/splash/             Startbildschirme für iPhone-Modelle
public/manifest.webmanifest  App-Name, Farben, Vollbild
public/sw.js               Service Worker: offline nutzbar
.github/workflows/         automatisches Veröffentlichen auf GitHub Pages
```
