const config = require("../constants/config");
const { read } = require("../controllers/scores");

// TODO: there is no need to refresh the whole admin panel every time anything happens. It also does not have to be done with js we should just use the ipc etc. this whole function should be scrapped and done cleanly

module.exports = (mainWindow) => {
  const scores = read();

  mainWindow.webContents.executeJavaScript(
    `document.getElementById('overview').innerHTML = '<p>${config.SERVER_HOSTED_CLIENTS.map(
      (client) =>
        `<a class="js-external-link" href="http://${config.NET_INFO.LOCAL_IP}:${config.NET_INFO.PORT}/${client}">${client}</a>`
    )}</p>'`
  );

  if (scores.length) {
    mainWindow.webContents.executeJavaScript(
      `document.getElementById('scores').innerHTML = '${scores
        .map(
          ({ firstName, lastName, score, time, country, state, key }) =>
            `<div class="score-row"><div>${firstName}</div><div>${lastName}</div><div>${score}</div><div>${time}</div><div>${country}</div><div>${state}</div><button class="delete-score-button js-delete-score" type="button" name="${key}"><img name="${key}" class="delete-score-icon js-delete-score" src="../assets/icons/trash.png"/></button></div>`
        )
        .join()}'`
    );
  } else {
    mainWindow.webContents.executeJavaScript(
      `document.getElementById('scores').innerHTML = ''`
    );
  }
};
