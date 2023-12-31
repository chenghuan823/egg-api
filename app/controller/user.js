'use strict';

const Controller = require('egg').Controller;

class UserController extends Controller {
  //1 用户列表
  async index() {
    const {ctx,app}=this
    let result=[]
    // ctx.throw(500,'故意出错')
    let page=ctx.query.page ? parseInt(ctx.query.page) :1
    let limit=5
    let offset=(page-1)*5
    let Op=app.Sequelize.Op
    //查询多个
    result=await app.model.Users.findAll({
      where:{
        // sex:'女',
        // username:{
        //   [Op.like]:"%冯%"
        // }
      },
      // attributes:['id','username','sex']
      attributes:{
        //排除
        exclude:['password']
      },
      order:[
        ['id','DESC'],
        ['updated_at','DESC']
      ],
      offset,
      limit
    })
    // list?page=1&status=2
    // ctx.query.page ctx.query.status

    //查询多个并统计
    // result=await app.model.Users.findAndCountAll()

    ctx.body={
      msg:'ok',
      data:result
    }
  }
  //2 获取用户信息
  async read() {
    const {ctx}=this
    //拿到路由参数
    let id=parseInt(ctx.params.id)
    //通过主键查询单个数据
    // let detail=await ctx.model.Users.findByPk(id)
    // if(!detail){
    //   return ctx.body={
    //     msg:'fail',
    //     data:'用户不存在'
    //   }
    // }

    //查询单个
    let detail=await ctx.model.Users.findOne({
      where:{
        id,
        sex:'女'
      }
    })
    ctx.body={
      msg:'ok',
      data:detail
    }
  }

  //3 创建用户
  async create() {
    const {ctx,app}=this
    let params=ctx.request.body

    ctx.validate({
      username:{type:'string',required:true,desc:'用户名'},
      password:{type:'string',required:true,desc:'密码'},
      sex:{type:'string',required:false,defValue:'男',desc:'性别'}
    })

    //参数验证

    //写入有数据库
    let res=await app.model.Users.create(params)
    // let res=await app.model.Users.create({
    //   username:'程欢',
    //   password:'123456',
    //   sex:'男',

    // })

    // let res=await app.model.Users.bulkCreate([
    //   {
    //     username:'冯伟红2',
    //     password:'123456',
    //     sex:'女',
    //   },
    //   {
    //     username:'程伟明2',
    //     password:'123456',
    //     sex:'男',
    //   },
    //   {
    //     username:'冯伟华2',
    //     password:'123456',
    //     sex:'男',
    //   },
    //   {
    //     username:'程焕天2',
    //     password:'123456',
    //     sex:'男',
    //   },
    //   {
    //     username:'程斌斌2',
    //     password:'123456',
    //     sex:'男',
    //   },
    //   {
    //     username:'张苗苗2',
    //     password:'123456',
    //     sex:'女',
    //   },
    // ])
    
    // ctx.body=res
    // console.log(ctx.request.body);
    //拿到路由参数
    // let id=ctx.params.id
    // let detail=demo.find(item=>item.id==id)
    // ctx.body={
    //   msg:'ok',
    //   data:detail
    // }
  }
  //4 更新
  async update(){
    let {ctx}=this
    let id=ctx.params.id?parseInt(ctx.params.id):0
    //先拿到这条记录
    let data=await ctx.model.Users.findByPk(id)
    if(!data){
      return ctx.body={
        msg:'fail',
        data:'该记录不存在'
      }
    }
    data.username='柯南'
    // let res=await data.save({fields:['username']})
    let params=this.ctx.request.body
    let res=await data.update(params,{
      fields:['username']
    })
    ctx.body={
      msg:'success',
      data:res
    }
  }
  //删除
  async destroy(){
    let {ctx,app}=this
    let Op=app.Sequelize.Op

    // let id=ctx.params.id?parseInt(ctx.params.id):0;
    // let data=await ctx.model.Users.findByPk(id);
    // if(!data){
    //   return ctx.body={
    //     msg:'fail',
    //     data:'该记录不存在'
    //   }
    // }
    // let res=await data.destroy();
    // ctx.body={
    //   msg:'ok',
    //   data:res
    // }
    //批量删除
    let res=await ctx.model.Users.destroy({
      where:{
        id:{
          [Op.lte]:7
        }
      }})
      ctx.body={
          msg:'ok',
          data:res
        }
  }
}

module.exports = UserController;
