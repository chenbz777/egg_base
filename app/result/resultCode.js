'use strict';
const resultCode = {
  illegal_request: {
    code: 7001,
    msg: '非法请求!',
  },
  token_invalid: {
    code: 7002,
    msg: 'token无效',
  },
  token_overdue: {
    code: 7003,
    msg: 'token过期',
  },
  token_error: {
    code: 7004,
    msg: 'token错误',
  },
  no_permissions: {
    code: 7005,
    msg: '权限不足!',
  },
  parameter_verification_error: {
    code: 7006,
    msg: '参数校验错误',
  },
  no_user: {
    code: 7007,
    msg: '用户不存在',
  },
  disable_user: {
    code: 7008,
    msg: '用户已被禁用',
  },
  404: {
    code: 7404,
    msg: '嘿 兄弟，请检查路径是否正确。',
  },
};
module.exports = {
  resultCode,
};
