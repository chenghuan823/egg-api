'use strict';

const { Controller } = require('egg');

class HomeController extends Controller {
  async index() {
    const { ctx } = this;
    ctx.body = '爱你';
  }

  async list() {
    const { ctx } = this;
    ctx.body = {
      msg:'ok',
      data:[1,2,3,4,5]
    };
  }
}

module.exports = HomeController;
