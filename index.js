"use strict";
const path = require("path");
const { app, BrowserWindow, Menu, ipcMain, nativeImage } = require("electron");
const { is } = require("electron-util");
const unhandled = require("electron-unhandled");
const debug = require("electron-debug");
const contextMenu = require("electron-context-menu");

const menu = require("./src/utilities/menu");
const updateScoreScreen = require("./src/utilities/updateScoreScreen");

const scores = require("./src/controllers/scores");

// Load the node server
require("./src/utilities/server");
// hot reloading
require("electron-reload")(__dirname);

// electron boilerplate
unhandled();
debug();
contextMenu();

// Note: Must match `build.appId` in package.json
app.setAppUserModelId("com.area23.LeaderBoard");

// Prevent windows from being garbage collected
let mainWindow;
let addWin;
let updateInterval;

// called on launch to make the window
const createMainWindow = async () => {
	// boilerplate
	const win = new BrowserWindow({
		title: app.name,
		show: false,
		fullScreen: true,
		webPreferences: {
			nodeIntegration: true, // TODO: nodeIntegration is considered a security risk refactor
			contextIsolation: false,
			enableRemoteModule: true,
			icon: path.join(__dirname, "src/assets/icons/area23.png"),
		},
	});

	// boilerplate
	win.on("ready-to-show", () => {
		win.show();
	});

	win.on("closed", () => {
		// boilerplate
		// Dereference the window
		// For multiple windows store them in an array
		mainWindow = undefined;
	});

	await win.loadFile(path.join(__dirname, "src/views/index.html"));

	/* start handlers */
	// launch score by hand pop up
	ipcMain.on("add-window", async () => {
		// if addWin does not already exist
		if (!addWin) {
			// create a new add todo window
			addWin = new BrowserWindow({
				fullScreen: true,
				parent: mainWindow,
				webPreferences: {
					nodeIntegration: true,
					contextIsolation: false,
					enableRemoteModule: true,
				},
			});
			await addWin.loadFile(path.join(__dirname, "src/views/add.html"));

			// cleanup
			addWin.on("closed", () => {
				addWin = null;
			});
		}
	});

	// not all of these are used but as this is a crud app every crud action is usable with the ipc
	["create", "read", "update", "delete"].forEach((action) => {
		ipcMain.on(`${action}-score`, (event, [score]) => {
			// close the add a new score popup after any action
			if (addWin && addWin.close) {
				addWin.close();
			}
			scores[action](score);
			updateScoreScreen(mainWindow);
		});
	});
	/* end handlers */

	// full screen the window
	win.maximize();
	return win;
};

// Prevent multiple instances of the app
if (!app.requestSingleInstanceLock()) {
	app.quit();
}

// only allow one main window
app.on("second-instance", () => {
	if (mainWindow) {
		if (mainWindow.isMinimized()) {
			mainWindow.restore();
		}

		mainWindow.show();
	}
});

// close the app when all the windows are closed
app.on("window-all-closed", () => {
	if (!is.macos) {
		app.quit();
	}
	clearInterval(updateInterval);
});

// when the app is started launch the main window
app.on("activate", async () => {
	if (!mainWindow) {
		mainWindow = await createMainWindow();
	}
});

app.dock.setIcon(
	nativeImage.createFromPath(app.getAppPath() + "src/assets/icons/area23.png")
);

(async () => {
	await app.whenReady();

	//set menu options
	Menu.setApplicationMenu(menu);
	// launch the admin panel main screen
	mainWindow = await createMainWindow();

	// make sure the main screen has all the submitted scores and app info on it
	// TODO: this should be done via IPC on changes not on an interval
	updateScoreScreen(mainWindow);
	updateInterval = setInterval(() => updateScoreScreen(mainWindow), 5000);
})();
