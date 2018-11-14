import React from 'react'
import Board from './Board'
import ScoreboardContainer from './ScoreboardContainer'
import NewGameButtonContainer from './NewGameButtonContainer'

/**
 * Main Game React Component to render
 */
class Game extends React.Component {
  render () {
    return (
      <div>
        <ScoreboardContainer />
        <NewGameButtonContainer />
        <Board />
      </div>
    )
  }
}

export default Game
