import { Router } from "express";

const routes = Router();

routes.get('/', (req, res) => {
    res.status(200).send('<h1>HOME ENDPOINT</h1>')
});

export {routes};