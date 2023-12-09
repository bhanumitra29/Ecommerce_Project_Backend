const { auth } = require('./auth');
const { homeController, slideController, addingData, datatoReact, allDataController } = require('./controller/categoeryController');

const { register, login } = require('./loginController');

const categoryRouter = require('express').Router();
// categoryRouter.get('/store',storeController)
categoryRouter.get('/all',allDataController)
// categoryRouter.get('/electronics',electronicsController)
// categoryRouter.get('watches',watchesController)
// categoryRouter.get('/accessories',accessoriesController)
categoryRouter.get('/slider',slideController)

categoryRouter.get('/add',addingData)
categoryRouter.get('/find',datatoReact)

module.exports = {categoryRouter};