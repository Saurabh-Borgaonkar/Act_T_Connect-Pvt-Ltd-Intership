const User=require("../models/User");
const bycryptjs=require("bcryptjs");
const jwt=require("jsonwebtoken");
const register =async (req, res) => {
    const {name,email,password,role}=req.body;
    // console.log(req.body);

    //for user side requirements
    if(!name || !email || !password){
        return res.status(400).json({       //bad request 400
            success:false,
             message: "Please fill all required fields"
        });
    }
    //we check the user is alredy exist 
    const isexitUser=await User.findOne({email});
    if(isexitUser){
        return res.status(409).json({
                 success: false,
            message: "User already exists"
      
        });
    }
//pass hashing insted of direct password sroting we use bycryptjs
      const hashedPwd=await bycryptjs.hash(password,10);
    // console.log(hashedPwd);
    const user=await User.create({
        name,
        email,
        password:hashedPwd,
        role
    })

    //201 define succefully work done
    return res.status(201).json({
    success: true,
    message: "User registered successfully",
    user
});
};

const login=async (req,res)=>{
    const {email,password}=req.body;
        const isuserExist=await User.findOne({email});
   if(!isuserExist){
    return res.status(404).json({
        success:false,
        msg:"user not found"
    })
   }
   const token=jwt.sign({
    id:isuserExist._id,
    role:isuserExist.role
   },
   process.env.JWT_SECRET,
   {
    expiresIn:"1d"
   }
);

   const isMatchpwd=await bycryptjs.compare(password,isuserExist.password);
   if(!isMatchpwd){
    return res.status(401).json({
        success:false,
        msg:"wrong password"
    })
   }
    return res.status(200).json({
         success:true,
        msg:"login succesfully",
        token
    });
}


const getUsers=async (req,res)=>{
    const users=await User.find();
    if(!users){
       return res.status().json({
            msg:"users not available"
        })
    }
    return res.status().json({
        msg:"find all users",
        users
    })
}

const deleteUser=async (req,res)=>{
    console.log("deelete users");
}
module.exports = { register,login,getUsers,deleteUser};