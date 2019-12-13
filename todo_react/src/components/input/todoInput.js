/* eslint-disable no-unused-vars */
import React, { Component } from 'react'

export class TodoInput extends Component {
  constructor(props) {
    super(props)
    this.state = {
      input: ''
    }
    this.handleChange = this.handleChange.bind(this)
    this.handleSubmit = this.handleSubmit.bind(this)
  }

  handleSubmit(e) {
    e.preventDefault()
    const { input } = this.state
    this.setState({ input: '' })
    this.props.todoAdd(input)
  }

  handleChange(e) {
    this.setState({ [e.target.name]: e.target.value })
  }

  render() {
    const { handleSubmit, handleChange } = this
    const { input } = this.state
    return (
      <div>
        <form
          onSubmit={handleSubmit}
        >
          <div className="form-group">
            <label htmlFor="todoInput">
              <span>Ajouter une tâche</span>
              <input
                className="form-control"
                id="todoInput"
                name="input"
                onChange={handleChange}
                placeholder='Tâche'
                type="text"
                value={input}
              />
              <button id="submit" className="btn btn-primary mt-2" type="submit">Ajouter</button>
            </label>
          </div>
        </form>
      </div >
    )
  }
}

export default TodoInput
