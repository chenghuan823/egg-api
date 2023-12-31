'use strict';

module.exports = (app) => {
  const { STRING, INTEGER, DATE,ENUM  } = app.Sequelize;

  const Users = app.model.define('users', {
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
     defaultValue:'',
     set(val){
      let hash=val+'---'
      this.setDataValue('password',hash)
     }
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
    created_at: {
      type:DATE,
      get(){
        const val=this.getDataValue('created_at')
        return (new Date(val)).getTime()
      }
    },
    updated_at: DATE,
  });

  return Users;
};