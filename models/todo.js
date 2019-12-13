const mongoose = require('mongoose')

const todoSchema = mongoose.Schema({
  title: { type: String, required: true },
  isActive: { type: Boolean, default: true },

  done: { type: Boolean, default: false }
})

module.exports = mongoose.model('Todo', todoSchema)
