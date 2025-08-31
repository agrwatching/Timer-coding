const { contextBridge, ipcRenderer } = require("electron");

contextBridge.exposeInMainWorld("electronAPI", {
  closeApp: () => ipcRenderer.send("close-app"),
  setIgnoreMouseEvents: (ignore) => ipcRenderer.send("set-ignore", ignore),
});
