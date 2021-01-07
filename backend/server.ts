import { handleAuthentication } from './auth';
import * as jsonServer from 'json-server';
import { Express } from 'express';
import * as fs from 'fs';
import * as https from 'https';

const server = jsonServer.create()
const router = jsonServer.router('db.json')
const middlewares = jsonServer.defaults()

// Set default middlewares (logger, static, cors and no-cache)
server.use(middlewares);

server.use(jsonServer.bodyParser);

server.post('/login', handleAuthentication);

// Use default router
server.use(router);

const options = {
  cert: fs.readFileSync('./backend/keys/cert.pem'),
  key: fs.readFileSync('./backend/keys/key.pem')
}

https.createServer(options, server)
  .listen(3001, () => {
    console.log('JSON Server is running on https://localhost:3001');
  }
)