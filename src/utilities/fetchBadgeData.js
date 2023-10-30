const { app } = require("electron");
const request = require("request");
const { CompuLead } = require("../constants/api_keys.json");

if (!CompuLead) {
  console.error("missing CompuLead keys see readme.");
}

const {
  COMPU_LEAD_ENDPOINTS,
  COMPU_LEAD_TEST_EVT_UID,
  COMPU_LEAD_TEST_TOKEN,
} = require("../constants/config");

const url = app.isPackaged
  ? COMPU_LEAD_ENDPOINTS.prod
  : COMPU_LEAD_ENDPOINTS.dev;

const evt_uid = app.isPackaged ? CompuLead.eventID : COMPU_LEAD_TEST_EVT_UID;

const token = app.isPackaged ? CompuLead.token : COMPU_LEAD_TEST_TOKEN;

module.exports = (badge_id) =>
  new Promise((res, rej) => {
    request.post(
      {
        url,
        headers: {
          "Content-Type": "application/x-www-form-urlencoded",
        },
        body: `req={"evt_uid":"${evt_uid}","badge_id":"${badge_id}","check":"C","token":"${token}"}`,
      },

      function (error, response, body) {
        if (error) {
          rej(error);
        }

        res(JSON.parse(response.body));
      }
    );
  });
