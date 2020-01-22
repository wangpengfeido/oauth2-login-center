const Router = require('@koa/router');

const { routerUser } = require('./router-user.js');

const router = new Router();

routerUser(router);

module.exports = router;
