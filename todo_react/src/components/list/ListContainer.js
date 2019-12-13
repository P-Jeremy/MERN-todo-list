import { connect } from 'react-redux'
import { todoGet } from '../../actions/todoActions'
import List from './list'

const mapStateToProps = ({ todos }) => ({
  todos
})

const mapDispatchToProps = (dispatch) => ({
  todoGet: () => {
    dispatch(todoGet())
  }
})

const ListContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(List)

export default ListContainer
