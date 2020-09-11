"use strict";

const sqlite = require("sqlite3");

const db = new sqlite.Database("./data.db", (err) => {
  if (err) {
    console.log("Error while starting the database");
    throw err;
  }
});
