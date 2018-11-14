import React from 'react'

const getScoreboard = (winner, scorePlayer1, scorePlayer2, currentPlayer, isBoardEnabled) => {
  if (isBoardEnabled) {
    if(currentPlayer === 'player1') {
      return(
        <div className='scoreboard'>
          <div className='active-player player1-style'>
            &rarr;
          </div>
          <div>
            Player1: {scorePlayer1} - Player2: {scorePlayer2}
          </div>
          <div className='player2-style'>
            &larr;
          </div>
        </div>
      )
    }

    return(
      <div className='scoreboard'>
        <div className='player1-style'>
          &rarr;
        </div>
        <div>
          Player1: {scorePlayer1} - Player2: {scorePlayer2}
        </div>
        <div className='active-player player2-style'>
          &larr;
        </div>
      </div>
    )
  }

  return(
    <div className='scoreboard'>
      <div className='player1-style'>
        &rarr;
      </div>
      <div>
        Player1: {scorePlayer1} - Player2: {scorePlayer2}
      </div>
      <div className='player2-style'>
        &larr;
      </div>
    </div>
  )
}

/**
 * Displays score of the users
 */
class Scoreboard extends React.Component {
  render () {
    const { winner, scorePlayer1, scorePlayer2, currentPlayer, isBoardEnabled } = this.props
    return (
      <div className='center'>
        {getScoreboard(winner, scorePlayer1, scorePlayer2, currentPlayer, isBoardEnabled)}
        <h3>
          Winner: {winner}
        </h3>
      </div>
    )
  }
}

export default Scoreboard
