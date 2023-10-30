"use strict";

const { networkInterfaces } = require("os");
const nets = networkInterfaces();

// this is used to find the IP address of the computer running the server
module.exports = () => {
  const results = {};

  for (const name of Object.keys(nets)) {
    for (const net of nets[name]) {
      // Skip over non-IPv4 and internal (i.e. 127.0.0.1) addresses
      if (net.family === "IPv4" && !net.internal) {
        if (!results[name]) {
          results[name] = [];
        }
        results[name].push(net.address);
      }
    }
  }

  return results.en0[0];
};
