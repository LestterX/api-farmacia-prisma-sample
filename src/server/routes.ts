import { Router } from "express";
import { LoginController } from "./controllers/LoginController";

const endpoints_prefix = process.env.ENDPOINTS_PREFIX || '/api/v1'
const routes = Router();

routes.get(`${endpoints_prefix}/`, (req, res) => {
    res.status(200).send('<h1>HOME ENDPOINT</h1>')
});

routes.post(`${endpoints_prefix}/auth/sign-up`, LoginController.signup);
routes.post(`${endpoints_prefix}/auth/sign-in`, LoginController.signin);

export {routes};