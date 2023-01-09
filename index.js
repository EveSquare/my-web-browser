const { app, BrowserWindow } = require('electron');
const path = require('path');

const createWindow = () => {
    // ブラウザウィンドウを作成
    const win = new BrowserWindow({
        width: 800,
        height: 600,
        webPreferences: {
            webviewTag: true,
        }
    });

    // HTMLファイルを読み込む
    win.loadFile('index.html');
}

// Electronの初期化完了後に実行
app.whenReady().then(() => {
    createWindow();
})

require('electron-reload')(__dirname, {
    electron: path.join(__dirname, 'node_modules', '.bin', 'electron'),
    hardResetMethod: 'exit'
});