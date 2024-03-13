const express = require('express')
const router = express.Router() // create a router
const itemsController = require('../controllers/items')


router.get('/items', itemsController.getTodos)
<<<<<<< Updated upstream
router.get('/item/:id', itemsController.getTodo)
router.post()
router.patch()
router.delete()
=======
router.post('/item', itemsController.createTodo)
router.put('/item/:id', itemsController.updateTodo)
router.patch('/item/:id', itemsController.updateTodo)
router.delete('/item/:id', itemsController.deleteTodo)
>>>>>>> Stashed changes
module.exports = router

