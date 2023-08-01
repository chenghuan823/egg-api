module.exports=()=>{
  return async function errorHandler(ctx,next){
    try{
      await next()
    }catch(error){
      ctx.status=error.status
      ctx.body={
        msg:'fail',
        data:error.message
      }
    }
  }
}