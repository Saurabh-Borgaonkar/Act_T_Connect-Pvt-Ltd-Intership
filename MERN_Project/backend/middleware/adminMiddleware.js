
const adminMiddleware=(req,res,next)=>{

    if(req.user.role!=="admin"){
        res.status(403).json({
            msg:"Access denied"
        });
    }
    next()
}
module.exports=adminMiddleware;