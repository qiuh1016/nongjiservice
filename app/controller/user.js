'use strict';

const Controller = require('egg').Controller;

class UserController extends Controller {
  async index() {
    this.ctx.body = 'hi, OrderController';
  }

  async add() {
    const { ctx, service } = this;
    let username = ctx.query.username;
    let password = ctx.query.password;
    let user = {
      username, password
    }

    await service.user.create(user)
      .then(res => {
        ctx.body = {
          code: 1,
          result: res
        }
      })
      .catch(err => {
        ctx.body = {
          code: 0,
          result: err
        }
      });
  }

  async list() {
    this.ctx.body = await this.service.user.findAll();
  }

  async detail() {
    let id = this.ctx.params.id;
    this.ctx.body = await this.service.user.findById(id);
  }

  async redis() {
    const { ctx, app } = this;
    // set
    await app.redis.set('foo', 'bar');
    // get
    ctx.body = await app.redis.get('foo');
  }
}

module.exports = UserController;
