const express = require('express')
const router = express.Router() // create a router
const itemsController = require('../controllers/items')


router.get('/', itemsController.getTodos)

router.post('/', itemsController.createTodo)
router.get('/:id', itemsController.getTodo)
router.put('/:id', itemsController.editTodo)
router.delete('/:id', itemsController.deleteTodo)

module.exports = router

