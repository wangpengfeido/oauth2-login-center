
module.exports.routerUser = function(router) {
  router.get('/get-user', async ctx => {
    ctx.body = user;
  });

  router.post('/add-user', async ctx => {});
};
