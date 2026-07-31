const jwt=require("jsonwebtoken");

const authMiddleware=(req,res,next)=>{
    try{
        // this code checks if the token is valid mean user is authenticated
        const authHeader=req.headers.authorization;
        console.log(authHeader,"missing");
        if (!authHeader) {
    return res.status(401).json({

        success: false,
        message: "Token missing"
    });
}

   const token = authHeader.split(" ")[1];

        const decoded = jwt.verify(token,process.env.JWT_SECRET);

        req.user = decoded;

        next();
    }catch(error){
          return res.status(401).json({
        message:"Invalid Token"
    });
    }
};

module.exports=authMiddleware;