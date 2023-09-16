import express from "express";
import bodyParser from 'body-parser';
import 'dotenv/config';
import { routes } from "./routes";

const server = express()

server.use(bodyParser.json())
server.use(bodyParser.urlencoded({ extended: true }));

server.use(routes);

export { server };