const getAddress = require("../utilities/getAddress");
const COUNTRY_LIST =
	require("./ISO-3166-Countries-with-Regional-Codes.json").map(
		(c) => c["alpha-3"]
	);
const STATE_LIST = require("./USA-STATES.json").map((s) => s.abbreviation);
const LOCAL_IP = getAddress();

module.exports = {
	SERVER_HOSTED_CLIENTS: ["quiz", "leader-board"],
	NET_INFO__REPLACEMENT_TOKEN: "ELECTRON_NET_INFO",
	COUNTRY_LIST_REPLACEMENT_TOKEN: "ELECTRON_COUNTRY_LIST",
	STATE_LIST_REPLACEMENT_TOKEN: "ELECTRON_STATE_LIST",
	STATE_LIST,
	COUNTRY_LIST,
	NET_INFO: {
		SCORES_END_POINT: "scores",
		BADGE_DATA: "badge-data",
		PORT: 19008,
		LOCAL_IP,
	},
	LOCAL_IP,
	REFRESH_RATE: 30000,
	COMPU_LEAD_ENDPOINTS: {
		dev: "https://www.compusystems.com/servlet/LeadAPI?type=submit",
		prod: "https://www.compusystems.com/servlet/LeadAPI?type=submit",
	},
	COMPU_LEAD_TEST_TOKEN: "b0883f925af870786df58ffc4105d107",
	COMPU_LEAD_TEST_EVT_UID: "8760",
};
