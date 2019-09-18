const { Developer } = require('../model/developer.js');
const { getDevelopers } = require('../dao/dao-developer.js');

module.exports.routerDeveloper = function routerDeveloper(router) {
  router.get('/get-development', async ctx => {
    const developers = await getDevelopers();
    ctx.body = developers;
  });

  router.post('/add-development', async ctx => {});
};
