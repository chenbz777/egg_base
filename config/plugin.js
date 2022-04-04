'use strict';

/** @type Egg.EggPlugin */
module.exports = {
  // had enabled by egg
  // static: {
  //   enable: true,
  // }

  // 【插件】配置跨域
  cors: {
    enable: true,
    package: 'egg-cors',
  },

  // 【插件】校验参数
  validatePlus: {
    enable: true,
    package: 'egg-validate-plus',
  },

  // 【插件】路由分组
  routerGroup: {
    enable: true,
    package: 'egg-router-group',
  },
};
