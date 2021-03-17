const { app, BrowserWindow, ipcMain,ipcRenderer, dialog } = require('electron');
const path = require('path');
ipcMain.on('passtomain',(event, data) =>{
  console.log(data)
})

// Handle creating/removing shortcuts on Windows when installing/uninstalling.
if (require('electron-squirrel-startup')) { // eslint-disable-line global-require
  app.quit();
}

const createWindow = () => {
  // Create the browser window.
  const mainWindow = new BrowserWindow({
    width: 800,
    height: 600,
    webPreferences: {
      nodeIntegration: true
    }
  });

  // and load the index.html of the app.
  mainWindow.loadFile(path.join(__dirname, 'index.html'));

  // Open the DevTools.
  mainWindow.webContents.openDevTools();
};

// ipcMain.on('hello',function(event){
//   dialog.showErrorBox('sry','nothing to be done')
//   // console.log(arg)
//   // console.log('arg')
//   // alert('ram')

//  //  msg = arg;
//  //  event.reply("gotomain",msg)
// })

// This method will be called when Electron has finished
// initialization and is ready to create browser windows.
// Some APIs can only be used after this event occurs.
app.on('ready', createWindow);

// Quit when all windows are closed, except on macOS. There, it's common
// for applications and their menu bar to stay active until the user quits
// explicitly with Cmd + Q.
app.on('window-all-closed', () => {
  if (process.platform !== 'darwin') {
    app.quit();
  }
});

app.whenReady().then(() => {
  // require('../main')
  // const calculate = require('../build/Release/addon');
  // console.log('Encrypt function with 3 args:', calculate.encrypt(data[0],data[1],data[2]))
  // console.log('Decrypt function with 2 args:', calculate.decrypt(data[0],data[1]))

app.on('activate', () => {
  // On OS X it's common to re-create a window in the app when the
  // dock icon is clicked and there are no other windows open.
  if (BrowserWindow.getAllWindows().length === 0) {
    createWindow();
  }
});
})


// In this file you can include the rest of your app's specific main process
// code. You can also put them in separate files and import them here.
