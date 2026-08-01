const express=require("express");
const authController=require("../controllers/authController")
const router=express.Router();
const authMiddleware=require("../middleware/authMiddleware")
const adminMiddleware=require("../middleware/adminMiddleware")
const userController=require("../controllers/userdataController")

router.post("/register",authController.register);
router.post("/login",authController.login);
router.get("/users",authMiddleware,adminMiddleware,userController.getUsers);
router.delete("/delete-user/:id",authMiddleware,adminMiddleware,userController.deleteUserById);
router.put("/update-user/:id",authMiddleware,adminMiddleware,userController.updateUserById);
router.get("/get-user/:id",authMiddleware,adminMiddleware,userController.getUserbyId);
module.exports=router;
