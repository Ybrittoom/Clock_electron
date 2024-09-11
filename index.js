const { BrowserWindow, app , ipcMain } = require("electron");

let win;
function createWindow() { // funçao para criar a janela do app electron
    win = new BrowserWindow({
        height: 600,
        width: 1020,
        frame: false,// esconde o bar title padrao do electron
        webPreferences: {
            nodeIntegration: true,
            contextIsolation: false
        }
    });

    win.setMenuBarVisibility(false) 
    win.loadFile("src/index.html");
    win.on("closed", () => {
        win = null;
    })
}

let windowMaximized = false;
ipcMain.on("manualClose", () => {
    app.quit();
})

ipcMain.on("manualMinimize", () => {
    win.minimize();
});

ipcMain.on("manualMaximize", () => {
    if (windowMaximized) {
        win.unmaximize();
    } else {
        win.maximize();
    }
    windowMaximized = !windowMaximized;
})

app.on("ready", createWindow);