'use strict';

const Controller = require('egg').Controller;

class PostController extends Controller {
  //列表页
  async index() {
    const {ctx}=this
    ctx.body='列表页'
  }
  //新增表单页
  async new() {
    const {ctx}=this
    ctx.body='新增表单页'
  }
  //新增
  async create() {
    const {ctx}=this
    ctx.body='新增'
  }
  //详情
  async show() {
    const {ctx}=this
    ctx.body='详情页'+ctx.params.id
  }
  //编辑
  async edit() {
    const {ctx}=this
    ctx.body='编辑'
  }
  //更新
  async updata() {
    const {ctx}=this
    ctx.body='更新'
  }
  //删除
  async destory() {
    const {ctx}=this
    ctx.body='删除'
  }
}

// GET 	    /posts	          posts	        app.controllers.posts.index
// GET 	    /posts/new	      new_post	    app.controllers.posts.new
// GET 	    /posts/:id	      post	        app.controllers.posts.show
// GET 	    /posts/:id/edit	  edit_post	    app.controllers.posts.edit
// POST     /posts	          posts	        app.controllers.posts.create
// PUT 	    /posts/:id	      post	        app.controllers.posts.update
// DELETE  	/posts/:id	      post	        app.controllers.posts.destroy

module.exports = PostController;
