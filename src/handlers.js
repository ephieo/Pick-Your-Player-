const fs = require("fs");
const path = require("path");
const dotenv = require("dotenv");

dotenv.config();

//----------Home Handler-----------

function home(request, response) {
	response.writeHead(200, {
		"content-type": "text/html",
	});
	response.end("<h1>We did it baby the server is working !!!</h1>");
}

//----------Missing Handler-----------
function missing(request, response) {
	response.writeHead(404, {
		"content-type": "text/html",
	});
	response.end("<h1>You're lost baby giiiiirrrrrrlll</h1>");
}

module.exports = {
	home,
	missing,
};
