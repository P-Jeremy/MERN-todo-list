const Todo = require('../models/todo')

module.exports = class ListController {
  /** Get all the todos in Db */
  async getTodos (req, res) {
    try {
      const results = await Todo.find()
      return res
        .status(200)
        .json(results)
        .end()
    } catch (error) {
      return res
        .status(400)
        .end()
    }
  };

  /** Add a todo in DB */
  async addTodo (req, res) {
    const { title } = req.body
    try {
      const newTodo = new Todo({ title })
      const result = await newTodo.save()

      const socketio = req.app.get('socketIo')
      socketio.sockets.emit('newTodo', { result: result })
      return res
        .status(200)
        .json(result)
        .end()
    } catch (error) {
      return res
        .status(400)
        .json(error)
    }
  };

  /** Update a todo */
  async updateTodoById (req, res) {
    const { id } = req.params
    try {
      const todoToUpdate = await Todo.findById({ _id: id })
      const result = await Todo.findOneAndUpdate({ _id: id },
        { done: !todoToUpdate.done },
        { new: true }
      )
      const socketio = req.app.get('socketIo')
      socketio.sockets.emit('todoUpdated', { result: result })

      return res
        .status(200)
        .json(result)
        .end()
    } catch (error) {
      return res
        .status(403)
        .json(error)
        .end()
    }
  };

  /** Delete a todo in DB */
  async deleteTodoByID (req, res) {
    const { id } = req.params
    try {
      const result = await Todo.findOneAndUpdate({ _id: id }, { isActive: false })
      const socketio = req.app.get('socketIo')
      socketio.sockets.emit('todoErased', { result: result })
      return res
        .status(200)
        .json(result)
        .end()
    } catch (error) {
      return res
        .status(400)
        .json(error)
        .end()
    }
  }
}
