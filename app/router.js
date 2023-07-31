'use strict';

/**
 * @param {Egg.Application} app - egg application
 */
module.exports = app => {
  const { router, controller } = app;
  router.get('/', controller.home.index);
  router.get('/list', controller.home.list);
  router.get('/user/list', controller.user.index);
  router.get('/user/read/:id', controller.user.read);
  router.post('/user/create', controller.user.create);

  router.resources('post','/api/post',controller.post)
};
 