'use strict'
const Service = require('egg').Service;
class UserService extends Service {
  async findAll() {
    return this.ctx.model.User.find({}).exec();
  }

  async create(user) {
    return this.ctx.model.User.create(user);
  }

  async findById(id) {
    return this.ctx.model.User.findById(id).exec();
  }
}

module.exports = UserService;