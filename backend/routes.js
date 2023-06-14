const { Router } = require('express')
const AddressController = require('./api/controllers/AddressController');
const DishController = require('./api/controllers/DishController');
const LoginController = require('./api/controllers/LoginController');
const RestaurantController = require('./api/controllers/RestaurantController');
const UserController = require('./api/controllers/UserController')
const OrderController = require('./api/controllers/OrderController')
const verifyToken = require('./api/middlewares/verifyToken');
const getPexelsToken = require('./api/middlewares/getPexelsToken');
const RestaurantAddressController = require('./api/controllers/RestaurantAddressController');

const router = Router()

//login
router.post('/login', LoginController.login)
router.get('/validate-token', LoginController.validateToken)

//user
router.get('/findUserRestaurants/:id', verifyToken, UserController.findUserRestaurants) // tras os dados do usuario e seus restaurantes.
router.post('/createUser', UserController.create)
router.delete('/deleteUser/:id', verifyToken, UserController.delete)
router.patch('/updateUser/:id', verifyToken, UserController.update)
router.get('/users', UserController.findByEmail);
router.get('/findUserById', verifyToken, UserController.findById);

//address
router.post('/createAddress', AddressController.create)
router.delete('/deleteAddress/:id', verifyToken, AddressController.delete)
router.patch('/updateAddress/:id', verifyToken, AddressController.update)

//restaurants
router.post('/createRestaurant', verifyToken, RestaurantController.create)
router.get('/findAllRestaurants', verifyToken, RestaurantController.findAllRestaurants)
router.get('/findMyRestaurants', verifyToken, RestaurantController.findMyRestaurants)
router.patch('/updateRestaurant/:id', verifyToken, RestaurantController.update)
router.delete('/deleteRestaurant/:id', verifyToken, RestaurantController.delete)
router.get('/restaurantes/:id/pratos', RestaurantController.findDishes) // retornar os pratos do restaurante.

//RestaurantsAddress
router.post('/createAddressRestaurant', verifyToken, RestaurantAddressController.createAddress)

//dishes
router.post('/createDish', verifyToken, DishController.create)
router.patch('/updateDish/:id', verifyToken, DishController.update)
router.get('/findDishes/:id', verifyToken, DishController.update)
router.delete('/deleteDish/:id', verifyToken, DishController.delete)

//order
router.post('/createOrder', verifyToken, OrderController.createOrder)
router.get('/getOrderAndDishes', verifyToken, OrderController.getOrderAndDishes)
router.get('/countTotalDishesValue', verifyToken, OrderController.countTotalDishesValue)
router.delete('/removeDishFromCartAndOrder', verifyToken, OrderController.removeDishFromOrder)

module.exports = router