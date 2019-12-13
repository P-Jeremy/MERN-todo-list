import { connect } from 'react-redux'
import { todoAdd } from '../../actions/todoActions'
import todoInput from '../input/todoInput'

const mapDispatchToProps = (dispatch) => ({
  todoAdd: (value) => {
    dispatch(todoAdd(value))
  }
})

const TodoInputContainer = connect(
  undefined,
  mapDispatchToProps
)(todoInput)

export default TodoInputContainer
