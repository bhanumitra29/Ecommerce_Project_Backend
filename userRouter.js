

const { authh } = require("./auth");
const { login, register, userauth, createcheckout1 } = require("./loginController");



const userRouter = require("express").Router();

userRouter.post("/register", register);
userRouter.post("/login", login);
userRouter.get("/auth", authh, userauth );
userRouter.post("/createcheckout1",createcheckout1);
module.exports = {userRouter}