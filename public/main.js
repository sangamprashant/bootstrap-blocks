const { app, BrowserWindow } = require("electron/main");
const path = require("node:path");

function createWindow() {
  const win = new BrowserWindow({
    // width: 800,
    // height: 600,
    icon: path.join("logo.ico"),
    nodeIntegration: true,
    worldSafeExecution: true,
    contextIsolation: true,
    preload: path.join(__dirname, "preload.js"),
  });
  // Remove menu options
  win.removeMenu();

  //   win.loadFile('index.html')
  //   win.loadURL("http://localhost:3000");
  win.loadURL(`file://${path.join(__dirname, "../build/index.html")}`);

  // Maximize the window
  win.maximize();

  // Open the DevTools.
  // win.webContents.openDevTools();
}

app.whenReady().then(() => {
  createWindow();

  app.on("activate", () => {
    if (BrowserWindow.getAllWindows().length === 0) {
      createWindow();
    }
  });
});

app.on("window-all-closed", () => {
  if (process.platform !== "darwin") {
    app.quit();
  }
});
