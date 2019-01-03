import React from 'react'
import { Button } from 'semantic-ui-react'

const RockPaperScissorsButton = () => (
  <div>
    <Button size='big' animated>
      <Button.Content visible>Rock, Paper</Button.Content>
      <Button.Content hidden>
        <i class="hand scissors icon"></i>
      </Button.Content>
    </Button>
  </div>
)

export default RockPaperScissorsButton
