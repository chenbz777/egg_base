'use strict';

/**
 * @description 日期格式化
 * @param date {Date} - 时间对象
 * @param format {String} - 日期格式，例如：'yyyy-MM-dd hh:mm:ss' or 'yyyy-MM-dd' or 'hh:mm:ss'
 * @author chenbingze
 * @date 2022/3/10
 */
const getDateToString = (date = new Date(), format = 'yyyy-MM-dd hh:mm:ss') => {
  const o = {
    'M+': date.getMonth() + 1, // 月份
    'd+': date.getDate(), // 日
    'h+': date.getHours(), // 小时
    'm+': date.getMinutes(), // 分
    's+': date.getSeconds(), // 秒
    'q+': Math.floor((date.getMonth() + 3) / 3), // 季度
    S: date.getMilliseconds(), // 毫秒
  };
  if (/(y+)/.test(format)) {
    format = format.replace(RegExp.$1, (date.getFullYear() + '').substr(4 - RegExp.$1.length));
  }
  for (const k in o) {
    if (new RegExp('(' + k + ')').test(format)) {
      format = format.replace(RegExp.$1, (RegExp.$1.length === 1) ? (o[k]) : (('00' + o[k]).substr(('' + o[k]).length)));
    }
  }
  return format;
};

/**
 * @description 计算两个时间相差的 => 天、时、分、秒
 * @param date1 {Date} - 开始时间
 * @param date2 {Date} - 结束时间
 * @author chenbingze
 * @date 2022/3/12
 */
const getTimeDifference = (date1 = new Date(), date2 = new Date()) => {

  const date3 = date2.getTime() - date1.getTime(); // 时间差秒
  // 计算出相差天数
  const days = Math.floor(date3 / (24 * 3600 * 1000));

  // 计算出小时数
  const leave1 = date3 % (24 * 3600 * 1000);
  // 计算天数后剩余的毫秒数
  const hours = Math.floor(leave1 / (3600 * 1000));

  // 计算相差分钟数
  const leave2 = leave1 % (3600 * 1000);
  // 计算小时数后剩余的毫秒数
  const minutes = Math.floor(leave2 / (60 * 1000));

  // 计算相差秒数
  const leave3 = leave2 % (60 * 1000);
  // 计算分钟数后剩余的毫秒数
  const seconds = Math.round(leave3 / 1000);

  // 间隔天数
  const differDays = days;
  // 间隔小时
  const differHours = (differDays * 24) + hours;
  // 间隔分钟
  const differMinutes = (differHours * 60) + minutes;
  // 间隔秒
  const differSeconds = (differMinutes * 60) + seconds;

  return {
    days,
    hours,
    minutes,
    seconds,
    differDays,
    differHours,
    differMinutes,
    differSeconds,
  };
};

/**
 * @description 获取日期时间 yyyy-MM-dd hh:mm:ss
 * @param date {Date} - 时间对象
 * @author chenbingze
 * @date 2022/3/10
 */
const getDateTime = (date = new Date()) => {
  return getDateToString(date, 'yyyy-MM-dd hh:mm:ss');
};

/**
 * @description 获取日期 yyyy-MM-dd
 * @param date {Date} - 时间对象
 * @author chenbingze
 * @date 2022/3/10
 */
const getDate = (date = new Date()) => {
  return getDateToString(date, 'yyyy-MM-dd');
};

/**
 * @description 获取时间 hh:mm:ss
 * @param date {Date} - 时间对象
 * @author chenbingze
 * @date 2022/3/10
 */
const getTime = (date = new Date()) => {
  return getDateToString(date, 'hh:mm:ss');
};

/**
 * @description 获取时间戳(毫秒级别)
 * @param date {Date} - 时间对象
 * @author chenbingze
 * @date 2022/3/10
 */
const getTimestamp = (date = new Date()) => {
  return date.getTime();
};

/**
 * @description 获取时间戳(秒级别)
 * @param date {Date} - 时间对象
 * @author chenbingze
 * @date 2022/3/10
 */
const getTimestamp10 = (date = new Date()) => {
  const timestamp10 = Math.round(date.getTime() / 1000).toString();
  return timestamp10;
};

/**
 * @description 获取当前时间是今年的第几天
 * @param date {Date} - 时间对象
 * @author chenbingze
 * @date 2022/3/10
 */
const getDayOfYear = (date = new Date()) => {
  const currentYear = new Date().getFullYear().toString();
  const hasTimestamp = date - new Date(currentYear);
  const hasDays = Math.ceil(hasTimestamp / (24 * 60 * 60 * 1000)) + 1;

  return hasDays;
};

/**
 * @description 获取当前时间是今年的第几周
 * @param date {Date} - 时间对象
 * @author chenbingze
 * @date 2022/3/10
 */
const getWeekOfYear = (date = new Date()) => {
  return Math.ceil(getDayOfYear(date) / 7);
};

module.exports = {
  getDateToString,
  getTimeDifference,
  getDateTime,
  getDate,
  getTime,
  getTimestamp,
  getTimestamp10,
  getDayOfYear,
  getWeekOfYear,
};
