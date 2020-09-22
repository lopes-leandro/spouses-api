import jsonServer from 'json-server';
import data from "./src/mockData/index";

const server = jsonServer.create();
const router = jsonServer.router(data);
const middleware = jsonServer.defaults();

server.use(middleware);
server.use(router);
server.listen(4500, () => {
  console.log('JSON Server está em execução')
});