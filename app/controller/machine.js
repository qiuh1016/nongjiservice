'use strict';

const Controller = require('egg').Controller;

class MachineController extends Controller {

  async addRent() {
    this.ctx.body = "addRent"
  }

  async addNeed() {

  }

  async rentList() {

  }

  async needList() {

  }

}

module.exports = MachineController;