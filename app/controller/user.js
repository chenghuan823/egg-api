'use strict';

const Controller = require('egg').Controller;

class UserController extends Controller {
  //1 用户列表
  async index() {
    const {ctx,app}=this
    // list?page=1&status=2
    // ctx.query.page ctx.query.status

    ctx.body={
      msg:'ok',
    }
  }
  //2 获取用户信息
  async read() {
    const {ctx}=this
    //拿到路由参数
    let id=parseInt(ctx.params.id)
    //通过主键查询单个数据
    let detail=await ctx.model.Users.findByPk(id)
    if(!detail){
      return ctx.body={
        msg:'fail',
        data:'用户不存在'
      }
    }
    ctx.body={
      msg:'ok',
      data:detail
    }
  }

  //3 创建用户
  async create() {
    const {ctx,app}=this
    // let res=await app.model.Users.create({
    //   username:'程欢',
    //   password:'123456',
    //   sex:'男',

    // })

    let res=await app.model.Users.bulkCreate([
      {
        username:'冯伟红1',
        password:'123456',
        sex:'女',
      },
      {
        username:'程伟明1',
        password:'123456',
        sex:'男',
      },
      {
        username:'冯伟华1',
        password:'123456',
        sex:'男',
      },
      {
        username:'程焕天1',
        password:'123456',
        sex:'男',
      },
      {
        username:'程斌斌1',
        password:'123456',
        sex:'男',
      },
      {
        username:'张苗苗1',
        password:'123456',
        sex:'女',
      },
    ])
    
    ctx.body=res
    // console.log(ctx.request.body);
    //拿到路由参数
    // let id=ctx.params.id
    // let detail=demo.find(item=>item.id==id)
    // ctx.body={
    //   msg:'ok',
    //   data:detail
    // }
  }

}

module.exports = UserController;
