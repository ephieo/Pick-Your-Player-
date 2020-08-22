//requiring the handlers file so I have access to what I want to happen when these things are routed.
const handlers = require("./handlers");

function router(request, response) {
	const url = request.url;
	const method = request.method;
	if (url === "/" && method === "GET") {
		handlers.home(request, response);
	} else {
		handlers.missing(request, response);
	}
}

module.exports = router;
