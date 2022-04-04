'use strict';

/**
 * @description 全局异常统一处理
 * @author chenbingze
 * @date 2022/3/10
 */
module.exports = () => {
  return async function errorHandler(ctx, next) {
    try {
      await next();

      if (ctx.status === 404) {
        ctx.body = ctx.result.resultInfo('404');
      }

    } catch (err) {

      const { app } = ctx;

      // 所有的异常都在 app 上触发一个 error 事件，框架会记录一条错误日志
      app.emit('error', err, ctx);

      console.log('====== 有报错了兄弟!!! ======');
      console.log('❌ 提示:', err.message);
      console.log(ctx.result.resultInfo(err.message));
      console.log('=============================');

      ctx.body = ctx.result.resultInfo(err.message);
      ctx.status = err.status || 500;
    }
  };
};
