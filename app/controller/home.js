'use strict';

const Controller = require('egg').Controller;

class HomeController extends Controller {
  async index() {
    const { ctx } = this;
    ctx.body = ctx.result.success('hi, egg');
  }
}

module.exports = HomeController;
