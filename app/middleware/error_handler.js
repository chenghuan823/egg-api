module.exports=(option,app)=>{
  return async function errorHandler(ctx,next){
    try{
      await next()
    }catch(error){
      ctx.app.emit('error',error,ctx)

      ctx.status=error.status
      if(ctx.status===422){
        return ctx.body={
          msg:'fail',
          data:error.errors
        }
      }

      ctx.body={
        msg:'fail',
        data:error.message
      }
    }
  }
}