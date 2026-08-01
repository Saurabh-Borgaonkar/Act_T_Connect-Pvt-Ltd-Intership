const User=require("../models/User");

const getUsers=async(req,res)=>{
    try{
        const users=await User.find();
        res.status(200).json({
            success:true,
            message:"Users fetched successfully",
            users
        })
    }catch(error){
        res.status(500).json({
            success:false,  
            message:"Error fetching users",
            error:error.message
        })
    }
};
const deleteUserById=async(req,res)=>{
    try{
        const userId=req.params.id;
        // const { _id } = req.body;
        const deletedUser=await User.findByIdAndDelete(userId);
        if(!deletedUser){
            return res.status(404).json({
                success:false,
                message:"User not found"
            })
        }
        res.status(200).json({
            success:true,
            message:"User deleted successfully"
        })
    }catch(error){
        res.status(500).json({
            success:false,
            message:"Error deleting user",
            error:error.message
        })
    }
};
const updateUserById=async(req,res)=>{
    const userid=req.params.id;
    const {name,email,role}=req.body;
    const updatedUser=await User.findByIdAndUpdate(userid,{name,email,role},{new:true});
    if(!updatedUser){
        return res.status(404).json({
            success:false,
            message:"User not found"
        })
    }
    res.status(200).json({
        success:true,
        message:"User updated successfully",
        user:updatedUser
    })
};

const getUserbyId=async(req,res)=>{
    const userid=req.params.id;
    const user=await User.findById(userid);
    if(!user){
        return res.status(404).json({
            success:false,
            message:"User not found"
        })
    }
    res.status(200).json({
        success:true,
        message:"User fetched successfully",
        user
    })
}
module.exports={getUsers,deleteUserById,updateUserById,getUserbyId};