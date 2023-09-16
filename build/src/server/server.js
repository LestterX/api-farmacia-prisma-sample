"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.server = void 0;
const express_1 = __importDefault(require("express"));
const body_parser_1 = __importDefault(require("body-parser"));
require("dotenv/config");
const routes_1 = require("./routes");
const server = (0, express_1.default)();
exports.server = server;
server.use(body_parser_1.default.json());
server.use(body_parser_1.default.urlencoded({ extended: true }));
server.use(routes_1.routes);
