import React from 'react'
import { Button } from 'semantic-ui-react'

const TicTacToeButton = () => (
  <div>
    <Button size='big' animated>
      <Button.Content visible>Home</Button.Content>
      <Button.Content hidden>
         <i className="play icon"></i>
      </Button.Content>
    </Button>
  </div>
)

export default TicTacToeButton
