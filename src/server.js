const http = require("http");
const PORT = 3000;
console.log(PORT);
const dotenv = require("dotenv");
const router = require("./router");

// requiring the sever methods, dot env and the port from the .env file.
dotenv.config();
// creating the server and storing it in a variable of the same name.
const server = http.createServer(router);

// selecting the port and listening to it.
server.listen(PORT, () => console.log(`Listening on http://localhost:${PORT}`));
