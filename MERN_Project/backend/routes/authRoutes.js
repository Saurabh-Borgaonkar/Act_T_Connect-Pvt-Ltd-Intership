const express=require("express");
const authController=require("../controllers/authController")
const router=express.Router();
const authMiddleware=require("../middleware/authMiddleware")
const adminMiddleware=require("../middleware/adminMiddleware")

// router.get("/profile", authMiddleware, (req, res) => {
//     res.status(200).json({
//         success: true,
//         message: "Profile Accessed",
//         user: req.user
//     });
// });
// router.delete("/delete-user",authMiddleware,adminMiddleware,authController.deleteUser)
// router.get("/users",authController.getUsers);

router.delete(
  "/delete-user",
  authMiddleware,
  adminMiddleware,
  authController.deleteUser
);
router.post("/register",authController.register);
router.post("/login",authController.login);
module.exports=router;
