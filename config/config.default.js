/* eslint valid-jsdoc: "off" */

'use strict';

/**
 * @param {Egg.EggAppInfo} appInfo app info
 */
module.exports = appInfo => {
  /**
   * built-in config
   * @type {Egg.EggAppConfig}
   **/
  const config = exports = {};

  // use for cookie sign key, should change to your own and keep security
  config.keys = appInfo.name + '_1690784899357_6998';

  // add your middleware config here
  config.middleware = [];

  // add your user config here
  const userConfig = {
    // myAppName: 'egg',
  };

  config.security={
    csrf:{
      enable:false,
    },
    //跨域白名单
    // domainWhiteList:['http://localhost:3000']
    domainWhiteList:[]
  }

  //允许跨域的方法
  config.cors={
    origin:'*',
    allowMethods:'GET, PUT, POST, DELETE, PATCH'
  }

  config.sequelize = {
    dialect: 'mysql',
    host: '127.0.0.1',
    username:'root',
    password:'root',
    port: 3306,
    database: 'eggapi',
    //中国时区
    timezone:'+08:00',
    define:{
      freezeTableName:true,
      //自动写入时间戳
      timestamps:true,
      createdAt:'created_at',
      updatedAt:'updated_at',
      // 驼峰命名
      underscored:true
    }
  };

  return {
    ...config,
    ...userConfig,
  };
};
