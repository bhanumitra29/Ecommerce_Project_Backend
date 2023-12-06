const { auth } = require('./auth');
const { storeController, mobilesController, electronicsController, watchesController, accessoriesController, homeController, slideController } = require('./controller/categoeryController');
const { register, login } = require('./loginController');

const categoryRouter = require('express').Router();
categoryRouter.get('/store',storeController)
categoryRouter.get('/mobiles',mobilesController)
categoryRouter.get('/electronics',electronicsController)
categoryRouter.get('watches',watchesController)
categoryRouter.get('/accessories',accessoriesController)
categoryRouter.get('/slider',slideController)
categoryRouter.get('/',auth,homeController)
categoryRouter.post("/register",register)
categoryRouter.post('/login',login)

module.exports = {categoryRouter};