"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const server_1 = require("./server/server");
const SERVER_PORT = process.env.SERVER_PORT || 5050;
server_1.server.listen(SERVER_PORT, () => {
    console.log(`Server está sendo executando em http://localhost:${SERVER_PORT}`);
});
