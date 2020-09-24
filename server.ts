import jsonServer from "json-server";
import data from "./src/mockData/index";

const server = jsonServer.create();
const router = jsonServer.router('data.json');
const middleware = jsonServer.defaults();
const port = process.env.PORT || 4500;

server.use(middleware);
server.use(router);
server.listen(port, () => {
  console.log(`JSON Server está em execução em http://localhost:${port}`);
});