"use strict";

const mongoose = require("mongoose");
const os = require("os");
const process = require("process");
const _SECOND = 5000;

//check overload
const checkOverload = () => {
  setInterval(() => {
    const numConnection = mongoose.connections.length;
    const numbCores = os.cpus().length;
    const memoryUsage = process.memoryUsage().rss;
    // Example maximum number of connection based on number of cores
    const maxConnections = numbCores * 4;

    console.log(`Memory usage:: ${memoryUsage / 1024 / 1024} MB`);
    console.log(`Active connection: ${numConnection}`);

    if (numConnection > maxConnections) {
      console.log(`Connection overload detected!!`);
    }
  }, _SECOND);
};

module.exports = {
  checkOverload
};
