import React from 'react'
import { Button } from 'semantic-ui-react'

const TicTacToeButton = () => (
  <div>
    <Button size='big' animated>
      <Button.Content visible>Tic-Tac-Toe</Button.Content>
      <Button.Content hidden>
        <div className='fw9 f7 avenir'>X O X</div>
      </Button.Content>
    </Button>
  </div>
)

export default TicTacToeButton
