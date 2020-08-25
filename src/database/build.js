const fs = require("fs");
const path = require("path");
const db = require("./connection");
// creating a path to the init file so that It can be created
const initPath = path.join(__dirname, "init.sql");
// reading the file by follwing the path created above.
const initSQL = fs.readFileSync(initPath, "utf-8");

const build = () => {
	db.query(init.SQL);
};

module.exports = build;
