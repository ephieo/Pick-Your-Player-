const pg = require("pg");
const dotenv = require("dotenv");

dotenv.config();

const options = {
	connectionStr: process.env.DATABASE_URL,
	ssl: { rejectUnauthorized: false },
};

if (process.env.NODE_ENV === "test") {
	options.connectionstr = process.env.TEST_DATABASE_URL;
}
//what does pg actually do ? and what does pg.pool do ?
const db = new pg.Pool(options);

module.exports = db;
