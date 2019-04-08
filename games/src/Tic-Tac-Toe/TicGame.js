import React from "react";
import './Tic.css'
import TicBoard from "./TicBoard"

class TicTacGame extends React.Component{

state = {
    board: [
            ['hi', 'higher', 'highest'],
            [' ', ' ', ' '],
            ['meow', 'meower', 'meowist']
        ],
    playerTurn: 'X',
    counter: 0,
    message: 'Tic-Tac-Toe'
}

render() {
    let board = this.state.board
    return (
      <div className="App-header">
        <TicBoard playerTurn={this.state.playerTurn}>
        {board}</TicBoard>
      </div>
    );
  }
};

export default TicTacGame;