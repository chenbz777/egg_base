'use strict';
const resultCode = {
  illegal_request: {
    code: 7001,
    msg: '非法请求!',
  },
  'invalid token': {
    code: 7002,
    msg: 'token无效',
  },
  'jwt expired': {
    code: 7003,
    msg: 'token过期',
  },
  no_permissions: {
    code: 7004,
    msg: '权限不足!',
  },
  parameter_verification_error: {
    code: 7005,
    msg: '参数错误',
  },
  no_user: {
    code: 7006,
    msg: '用户不存在',
  },
  disable_user: {
    code: 7007,
    msg: '用户已被禁用',
  },
  404: {
    code: 7404,
    msg: '嘿 兄弟，请检查路径是否正确',
  },
};
module.exports = {
  resultCode,
};
