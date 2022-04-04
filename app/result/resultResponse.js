'use strict';

const { resultCode } = require('./resultCode');

const result = (code = 0, msg = 'ok', data) => {
  return {
    code,
    msg,
    data,
  };
};

const success = (data = '') => {
  return result(200, '成功', data);
};

/**
 * @description 返回信息
 * @param info {String} - resultCode信息，例如：'NO_WEIXIN'
 * @author chenbingze
 * @date 2022/3/10
 */
const resultInfo = info => {
  if (resultCode[info]) {
    const { code, msg } = resultCode[info];
    return result(code, msg);
  }
  return result(500, '服务器内部错误');

};

/**
 * @desc 统一全局返回
 * @author chenbingze
 * @date 2022/3/10
 */
module.exports = {
  result,
  success,
  resultInfo,
};
