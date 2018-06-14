const {app, BrowserWindow, Tray, Menu} = require('electron');
const path=require('path');
let  iconPath= path.join('__dirname','');

let appIcon = null;
let win = null;

app.on('ready', function() {
    win = new BrowserWindow({ show: false});
    appIcon= new Tray(iconPath);
    var contextMenu = Menu.buildFromTemplate([
        { label: 'Item1', type:'radio'},
        { label: 'Item2'},
        { label: 'Item3'}
    ]);
});