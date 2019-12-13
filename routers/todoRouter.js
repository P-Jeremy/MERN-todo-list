const express = require('express')
const router = express.Router()
const TodoController = require('../controllers/todoController')

/** New instance of ContactController */
const controller = new TodoController()

/** GET ALL TODOS */
router.get('/', controller.getTodos)

/** ADD A TODO ITEM TO THE LIST */
router.post('/', controller.addTodo)

/** UPDATE A TODO ON DONE */
router.put('/:id', controller.updateTodoById)

/** UPDATE A TODO ON ISACTIVE  */
router.delete('/:id', controller.deleteTodoByID)

module.exports = router
