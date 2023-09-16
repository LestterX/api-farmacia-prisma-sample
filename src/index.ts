import {server} from './server/server';

const SERVER_PORT = process.env.SERVER_PORT || 5050;

server.listen(SERVER_PORT, () => {
    console.log(`Server está sendo executando em http://localhost:${SERVER_PORT}`);
});