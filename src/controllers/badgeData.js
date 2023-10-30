const fetchBadgeData = require("../utilities/fetchBadgeData");

module.exports = {
  create: (req, res) => {
    if (res) {
      res.status(501);
    }
  },
  read: async (req, res) => {
    try {
      if (!req || !req.query.badge_id) {
        res.status(400);
      }

      let data = await fetchBadgeData(req.query.badge_id);
      if (data) {
        res.status(200).json(data);
      } else {
        res.status(404);
      }
    } catch (errors) {
      res.status(500).json({ errors });
    }
  },
  update: (req, res) => {
    res.status(501);
  },
  delete: async (req, res) => {
    res.status(501);
  },
};
