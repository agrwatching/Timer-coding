const { app, BrowserWindow, ipcMain } = require("electron");
const path = require("path");

let win;

app.on("ready", () => {
  win = new BrowserWindow({
    fullscreen: true,
    transparent: true,
    frame: false,
    alwaysOnTop: true,
    webPreferences: {
      preload: path.join(__dirname, "preload.js"),
    },
  });

  // default: tembus
  win.setIgnoreMouseEvents(true, { forward: true });

  win.loadFile(path.join(__dirname, "src", "index.html"));
});

ipcMain.on("close-app", () => {
  app.quit();
});

ipcMain.on("set-ignore", (event, ignore) => {
  win.setIgnoreMouseEvents(ignore, { forward: true });
});
