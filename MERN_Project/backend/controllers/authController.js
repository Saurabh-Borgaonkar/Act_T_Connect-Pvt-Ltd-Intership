const User=require("../models/User");
const bycryptjs=require("bcryptjs");

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
    const {name,password}=req.body;
    
}

module.exports = { register };