import React from "react";
import { Button } from 'semantic-ui-react'
import gameFunctions from './game-functions'

class PigLatin extends React.Component{
    state = {
        pigLatin: 'ellohay!',
        userInput: ' ',
    }

    handleClick(){
        const pigLatin = gameFunctions.translatePhrase(this.state.userInput)
        this.setState({pigLatin})
    }

render() {
    return (
      <div className="App-header">
            <div className="pa4">{this.state.pigLatin}</div>
            <input className="pa4 mb4"
                placeholder="hello!"
                // name="userInput"
                // value={this.state.userInput}
                onChange={(e) => this.setState({userInput: e.target.value})} ></input>
            <Button inverted color='teal'
                onClick={() => this.handleClick()}>
            Make Pig Latin!</Button>
      </div>
    );
  }
};

export default PigLatin;