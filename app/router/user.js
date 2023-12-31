module.exports = app => {
  const { router, controller } = app;
  router.get('/user/list', controller.user.index);
  router.get('/user/read/:id', controller.user.read);
  router.post('/user/create', controller.user.create);
  router.post('/user/update/:id', controller.user.update);
  router.post('/user/delete/:id', controller.user.destroy);

};