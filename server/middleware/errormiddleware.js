const errormiddleware= async(err, req, res, next)=>{
    const isProd=process.env.production
    console.log("errormiddleare")
  const message=err.message || 'server error'
  const status= err.status || 500
  return res.status(status).json({msg:isProd=='production'?"something went wrong":message})  
}

module.exports=errormiddleware;