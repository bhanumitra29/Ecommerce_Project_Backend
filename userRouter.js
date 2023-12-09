const { auth } = require("./auth");
const { login, register, userauth } = require("./loginController");



const userRouter = require("express").Router();

userRouter.post("/register", register);
userRouter.post("/login", login);
userRouter.get("/auth", auth, userauth);

module.exports = {userRouter}