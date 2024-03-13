const express = require('express')
const router = express.Router() // create a router
const itemsController = require('../controllers/items')


router.get('/items', itemsController.getTodos)

router.post('/item', itemsController.createTodo)
router.get('/item/:id', itemsController.getTodo)
router.put('/item/:id', itemsController.editTodo)
router.delete('/item/:id', itemsController.deleteTodo)

module.exports = router

