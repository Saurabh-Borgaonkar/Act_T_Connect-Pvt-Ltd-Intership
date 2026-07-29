const User=require("../models/User");

const register =async (req, res) => {
    const {name,email,password,role}=req.body;
    console.log(req.body);
    if(!name || !email || !password){
        return res.status(400).json({
            success:false,
             message: "Please fill all required fields"
        });
    }
    const isexitUser=await User.findOne({email});

    if(isexitUser){
        return res.status(409).json({
                 success: false,
            message: "User already exists"
      
        });
    }
     res.json({
        success: true,
        message: "User not found, continue registration"
    });
    res.send("Data recevied");
};

module.exports = { register };