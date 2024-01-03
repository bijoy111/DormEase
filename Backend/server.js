const { createServer } = require("http");
const { app } = require("./app");
const { db_connect, db_disconnect } = require("./db");

db_connect();

const server = createServer(app);

process.on("exit", async (code) => {
    await db_disconnect();
    console.log(`Exiting with code: ${code}`);
});

PORT = 3000
server.listen(PORT, err => {
    if (err) {
        db_disconnect();
        return console.log(`Something went wrong: \n${err}`);
    }
    console.log(`Server is listening on port: ${PORT}`);
});