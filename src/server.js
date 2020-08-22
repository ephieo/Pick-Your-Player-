const http = require("http");
const PORT = process.env.PORT; || 4000;
const dotenv = require("dotenv");

// requiring the sever methods, dot env and the port from the .env file.
dotenv.config();
// creating the server and storing it in a variable of the same name. 
const server = http.createServer((request, response) => {
  response.end("hello");
});
// selecting the port and listening to it. 
server.listen(PORT, () => console.log(`Listening on http://localhost:${PORT}`));
