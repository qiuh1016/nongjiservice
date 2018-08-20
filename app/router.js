'use strict';

/**
 * @param {Egg.Application} app - egg application
 */
module.exports = app => {
  const { router, controller } = app;
  router.get('/', controller.home.index);
  router.get('/list', controller.home.list);

  router.get('/user/', controller.user.index);
  router.get('/user/add', controller.user.add);
  router.get('/user/list', controller.user.list);
  router.get('/user/redis', controller.user.redis);
  router.get('/user/:id', controller.user.detail);

  router.get('/machine/rent/', controller.machine.rentList);
  router.get('/machine/need/', controller.machine.needList);
  router.get('/machine/rent/add', controller.machine.addRent);
  router.get('/machine/need/add', controller.machine.addNeed);
};
