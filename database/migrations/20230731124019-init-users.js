'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    /**
     * Add altering commands here.
     *
     * Example:
     * await queryInterface.createTable('users', { id: Sequelize.INTEGER });
     */
    const { INTEGER, DATE, STRING,ENUM } = Sequelize;
    // 创建表
    await queryInterface.createTable('users', {
      id: { type: INTEGER(20).UNSIGNED,
         primaryKey: true,
         autoIncrement: true 
      },
      username: {
        type:STRING(30),
        allowNull:false,
        defaultValue:'',
        comment:'用户名称',
        unique:true
      },
      password:{
        type:STRING(200),
        allowNull:false,
        defaultValue:''
      },
      avatar_url:{
        type:STRING(200),
        allowNull:true,
        defaultValue:''
      },
      sex:{
        type:ENUM,
        values:['男','女','保密'],
        allowNull:false,
        defaultValue:'男',
        comment:'用户性别',
      },
      created_at: DATE,
      updated_at: DATE,
    });
  },

  async down (queryInterface, Sequelize) {
    /**
     * Add reverting commands here.
     *
     * Example:
     * await queryInterface.dropTable('users');
     */
    await queryInterface.dropTable('users');
  }
};
