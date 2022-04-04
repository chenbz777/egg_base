'use strict';

const resultResponse = require('../result/resultResponse');
const result = Symbol('Context#result');

// app/extend/context.js
module.exports = {
  get result() {
    if (!this[result]) {
      this[result] = resultResponse;
    }
    return this[result];
  },
};
