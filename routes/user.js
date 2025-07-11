const express=require("express");
const wrapAsync = require("../utils/wrapAsync");
const User=require("../models/user.js");
const router=express.Router();
const passport=require("passport");
const { saveRedirectUrl } = require("../middleware.js");
const { signup, renderSignupForm } = require("../controller/users.js");
const userController=require("../controller/users.js");

router.route("/signup")
.get(userController.renderSignupForm)
.post(wrapAsync(userController.signup));

router.route("/login")
.get(userController.renderLoginForm)
.post(saveRedirectUrl, passport.authenticate("local",{failureRedirect:'/login',failureFlash:true}),(userController.login));

router.get("/logout",userController.logout);

// router.route("/signup")
// .get(userController.renderSignupForm)
//  .post(wrapAsync(userController.signup));

//  router.route("/login")
// .get(userController.renderLoginForm)
// .post(saveRedirectUrl,passport.authenticate("local",{
//     failureRedirect:'/login',
//     failureFlash: true,
// }),
// userController.login
// );

// router.get("/logout",userController.logout);
module.exports=router;