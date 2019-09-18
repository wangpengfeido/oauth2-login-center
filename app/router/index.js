const Router = require('@koa/router');

const { routerDeveloper } = require('./router-developer.js');

const router = new Router();

routerDeveloper(router);

module.exports = router;
