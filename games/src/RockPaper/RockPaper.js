import React from 'react'
import { Button } from 'semantic-ui-react'

class RockPaper extends React.Component{
    state = {
        message: "let's play!"
    }

    rockPaperScissors(hand1, hand2) {
        let message = ' '
        if(hand1 === hand2){
          message = 'That is a tie!';
        }else if((hand1 === 'rock' && hand2 === 'scissors' || 'lizard') ||
            (hand1 === 'scissors' && hand2 === 'paper' || 'lizard') ||
            (hand1 === 'paper' && hand2 === 'rock' || 'spock') ||
            (hand1 === 'lizard' && hand2 === 'paper' || 'spock') ||
            (hand1 === 'spock' && hand2 === 'rock' || 'scissors')){
                 message = 'First Player Wins!';
        }else{
          message = 'computer wins!';
        }
        this.setState({message})
      }
    render() {
        return (
            <div className="App-header">
                {/* <div>{this.state.message}</div>
                <Button>Play against the computer</Button>
                <Button>Play 2 player</Button> */}
                Coming soon! Rock, Paper, Scissors
            </div>
        );
      }
    };
    
export default RockPaper