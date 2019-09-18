const http = require('http');
const Koa = require('koa');

const router = require('./app/router/index.js');

const app = new Koa();

app.use(router.routes());
app.use(router.allowedMethods());

http.createServer(app.callback()).listen(13000);
