import { connect } from 'react-redux'
import { tokenDrop } from '../actions'
import Column from './Column'

const mapStateToProps = (state) => {
  return {
    slotOwner: state.board
  }
}

const mapDispatchToProps = (dispatch) => ({
  tokenDropDispatch: (player, column, boardEnabled) => () => {
    if (boardEnabled) {
      dispatch(tokenDrop(player, column))
    }
  }
})

const ColumnContainer = connect(mapStateToProps, mapDispatchToProps)(Column)

export default ColumnContainer
