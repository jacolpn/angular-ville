import * as jsonServer from 'json-server';
import * as https from 'https';

const server = jsonServer.create()
const router = jsonServer.router('db.json')
const middlewares = jsonServer.defaults()

// Set default middlewares (logger, static, cors and no-cache)
server.use(middlewares);

server.use(jsonServer.bodyParser);

// Use default router
server.use(router);

https.createServer(server)
  .listen(3000, () => {
    console.log('JSON Server is running on http://localhost:3000');
  }
)
