const EventEmitter = require("events");
const http = require("http");

class Sales extends EventEmitter {
    constructor() {
        super();
    }
}

const myEmitter = new Sales();

// myEmitter.on("newSale", () => {
//     console.log("testaaa");
// });

// myEmitter.on("newSale", (stock) => {
//     console.log("costumer:", stock);
// });

// myEmitter.emit("newSale", 9);

////////////////////////////////////////////

const server = http.createServer();

server.on("request", (req, res) => {
    console.log("Reqest");
    res.end("Resss");
});

server.on("request", (req, res) => {
    console.log("Reqest2");
});

server.on("close", () => {
    console.log("close");
});

server.listen(8000, "127.0.0.1", () => {
    console.log("waiting");
});
