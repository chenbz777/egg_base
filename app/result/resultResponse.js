'use strict';

const { resultCode } = require('./resultCode');

/**
 * @description 返回格式
 * @param code {number} - 状态码
 * @param msg {string} - 描述
 * @param data {string} - 数据
 * @param data {object} - 数据
 * @param data {array} - 数据
 * @author chenbingze
 * @date 2022/4/7
 */
const result = (code = 0, msg = 'ok', data) => {
  return {
    code,
    msg,
    data,
  };
};

/**
 * @description 成功
 * @param data {string} - 数据
 * @param data {Object} - 数据
 * @param data {array} - 数据
 * @author chenbingze
 * @date 2022/4/7
 */
const success = (data = '') => {
  return result(200, '成功', data);
};

/**
 * @description 返回信息
 * @param info {String} - resultCode信息，例如：'NO_WEIXIN'
 * @author chenbingze
 * @date 2022/3/10
 */
const resultInfo = (info, data) => {
  if (resultCode[info]) {
    const { code, msg } = resultCode[info];
    return result(code, msg, data);
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
