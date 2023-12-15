
const { auth } = require("./auth");
const { login, register, userauth, createcheckout } = require("./loginController");



const userRouter = require("express").Router();

userRouter.post("/register", register);
userRouter.post("/login", login);
userRouter.get("/auth", auth, userauth );
userRouter.get("/createcheckout",createcheckout);
module.exports = {userRouter}