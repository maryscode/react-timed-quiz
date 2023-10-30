"use strict";

const express = require("express");
const cors = require("cors");
const bodyParser = require("body-parser");
const cookieParser = require("cookie-parser");
const path = require("path");
const { stringReplace } = require("string-replace-middleware");

const config = require("../constants/config");

const scores = require("../controllers/scores");
const badgeData = require("../controllers/badgeData");
const healthCheck = require("../controllers/healthCheck");

const port = config.NET_INFO.PORT;

const app = express();

app.use(
  stringReplace({
    [config.NET_INFO__REPLACEMENT_TOKEN]: JSON.stringify(config.NET_INFO),
    [config.STATE_LIST_REPLACEMENT_TOKEN]: JSON.stringify(config.STATE_LIST),
    [config.COUNTRY_LIST_REPLACEMENT_TOKEN]: JSON.stringify(
      config.COUNTRY_LIST
    ),
  })
);

app.use(express.static(path.join(__dirname, "build")));
app.use(cookieParser());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json({ limit: "200kb" }));
app.use(cors());

config.SERVER_HOSTED_CLIENTS.forEach((client) => {
  app.use(
    `/${client}`,
    express.static(path.join(__dirname, "..", "views", client, "build"))
  );
});

app.get("/healthcheck", healthCheck.get);

app.post("/scores", scores.create);
app.get("/scores", scores.read);
app.put("/scores", scores.update);
app.delete("/scores", scores.delete);

app.get("/badge-data", badgeData.read);

app.listen(process.env.PORT || port, () => {
  console.log(`http://${config.NET_INFO.LOCAL_IP}:${config.NET_INFO.PORT}`);
});
