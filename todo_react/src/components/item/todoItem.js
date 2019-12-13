/* eslint-disable no-unused-vars */
import React, { Component } from 'react'
import './todoItem.scss'


export class TodoItem extends Component {

  constructor(props) {
    super(props)
    this.state = {
      checked: false,
    }
    this.handleDelete = this.handleDelete.bind(this)
    this.handleChange = this.handleChange.bind(this)

  }

  componentDidMount() {
    const { data } = this.props;
    this.setState({ checked: data.done })
  }
  handleDelete(id) {
    this.props.todoRemove(id)
  }

  handleChange(id) {
    const { checked } = this.state
    this.props.todoUpdate(id)
    this.setState({ checked: !checked })
  }
  render() {
    const { data } = this.props
    const { checked } = this.state
    const { handleDelete, handleChange } = this;

    return (
      <div className="card col-md-3 m-2">
        <div className="card-body">
          <div className="dataContainer">
            <input onChange={() => handleChange(data._id)} type="checkbox" checked={checked} />
            <span className={checked ? 'done' : ''}>{data.title}</span>
            <button className="btn btn-danger" type="button " onClick={() => handleDelete(data._id)}>X</button>
          </div>
        </div>
      </div>
    )
  }
}

export default TodoItem
