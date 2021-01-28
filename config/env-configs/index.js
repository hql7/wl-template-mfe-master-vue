/**
 *  auth: liming
 *  date: 2020/08/25
 *  description: 所有的未配置项默认继承自config.default
 */

exports.config = process.env.NODE_ENV === "development" ? require('./dev').config : require('./pro').config;
