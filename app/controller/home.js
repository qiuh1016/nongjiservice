'use strict';

const Controller = require('egg').Controller;

class HomeController extends Controller {
  async index() {
    this.ctx.body = 'hi, egg';
  }

  async list() {
    this.ctx.body = 'list';
  }
}

module.exports = HomeController;
