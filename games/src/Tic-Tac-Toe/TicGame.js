import React from "react";
import './Tic.css'
import TicBoard from "./TicBoard"
import gameFunctions from './game-functions'
import { Button } from 'semantic-ui-react'

class TicTacGame extends React.Component{

state = {
    board: [
            ['hi', ' ', 'meow'],
            [' ', ' ', ' '],
            [' ', 'cat', ' ']
        ],
    playerTurn: 'X',
    counter: 0,
    message: 'Tic-Tac-Toe'
}



ticTacToe(board, playerTurn, row, column) {
  board[row][column] = playerTurn;
  gameFunctions.incrementCounter();
  if (gameFunctions.checkForWin(board, playerTurn, row, column)) {
    this.setState({message: {playerTurn} + ' won!'})
  } 
  if(gameFunctions.catsScratch()){
    this.setState({message: 'Tie!'})
  }
  gameFunctions.switchPlayer();
}

// newGame(){
//     return this.setState({board: gameFunctions.resetBoard()})
// }

render() {
    let board = this.state.board
    return (
      <div>
        <TicBoard playerTurn={this.state.playerTurn}>
        {board}</TicBoard>
        {/* <Button onClick={this.newGame()}>New Game</Button> */}
      </div>
    );
  }
};

export default TicTacGame;