"use strict";
const mongoose = require("mongoose");
const connectString = `mongodb://localhost:2701/shopDev`;

class Database {
  constructor() {
    this.connect();
  }

  connect(type = "mongodb") {
    if (1 === 1) {
      mongoose.set("debug", true);
      mongoose.set("debug", { color: true });
    }
    mongoose.connect(connectString)
      .then(() => {
        console.log("Connected mongodb success!!");
      })
      .catch(() => {
        console.log("Error connect mongodb");
      });
  }

  static getInstance() {
    if (!Database.instance) {
      Database.instance = new Database();
    }
    return Database.instance;
  }
}

const instanceMongodb = Database.getInstance();

module.exports = instanceMongodb;
