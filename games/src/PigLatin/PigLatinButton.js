import React from 'react'
import { Button } from 'semantic-ui-react'

const TicTacToeButton = () => (
  <div>
    <Button size='big' animated>
      <Button.Content visible>Pig Latin</Button.Content>
      <Button.Content hidden>
      <div className='fw9 f6 avenir'>igpay atinlay</div>
      </Button.Content>
    </Button>
  </div>
)

export default TicTacToeButton
