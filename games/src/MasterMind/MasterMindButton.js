import React from 'react'
import { Button } from 'semantic-ui-react'

const MasterMindButton = () => (
  <div>
    <Button size='big' animated>
      <Button.Content visible>Mastermind</Button.Content>
      <Button.Content hidden>
      OOOO
      </Button.Content>
    </Button>
  </div>
)

export default MasterMindButton
