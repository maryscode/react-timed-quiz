const db = require("../utilities/db");
const validator = require("../utilities/validator");

module.exports = {
  create: (req, res) => {
    try {
      // requests to make data are expected to be inside of a body ie: {body: {...formdata}}
      const data = req.body;
      // make sure data is valid see validator
      const errors = validator(data);

      if (errors.hasErrors) {
        res.status(400).json({ errors });
      } else {
        // the UID for data will be lastName-lastModified
        const key = `${data.lastName}-${data.lastModified}`;

        db.set(`scores.${key}`, { ...data, key });

        // NOTE: this pattern is being used alot here
        //  I wanted these controllers to be useable by both IPC and Express.
        //  It felt strange to force the IPC pass a res with a callback
        if (res) {
          res.status(200).json({ key });
        } else {
          return key;
        }
      }
    } catch (errors) {
      if (res) {
        res.status(500).json({ errors });
      }
    }
  },
  read: (req, res) => {
    try {
      // one item can be fetched if you pass a query with a key or all can be if you do not
      let scores;
      if (req && req.query.key) {
        scores = db.get(`scores.${req.query.key}`);
      } else {
        scores = db.get("scores");
      }

      // sort keys by date
      scores = Object.values(scores).sort(
        (x, y) => x.lastModified - y.lastModified
      );

      if (res) {
        res.status(200).json({ scores });
      } else {
        return scores;
      }
    } catch (errors) {
      if (res) {
        res.status(500).json({ errors });
      }
    }
  },
  update: (req, res) => {
    if (res) {
      res.status(501);
    }
  },
  delete: async (req, res) => {
    try {
      // delete any score that has a key passed to it
      if (req && req.body) {
        let score = db.get(`scores.${req.body.key}`);

        db.delete(`scores.${req.body.key}`);
      } else if (res) {
        res.status(400);
      }

      if (res) {
        res.status(200);
      }
    } catch (e) {
      if (res) {
        res.status(500);
      }
    }
  },
};
