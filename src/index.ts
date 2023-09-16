import {server} from './server/server';

const SERVER_PORT = process.env.SERVER_PORT || 5050;
const endpoints_prefix = process.env.ENDPOINTS_PREFIX || '/api/v1'

const startServer = () => {
    server.listen(SERVER_PORT, () => {
        console.log(`Servidor está sendo executado em http://localhost:${SERVER_PORT}${endpoints_prefix}`);
    });    
};

startServer();