import React from "react";
import './Tic.css'
import TicBoard from "./TicBoard"

class TicTacGame extends React.Component{

state = {
    board: [
            ['hi', ' ', 'meow'],
            [' ', ' ', ' '],
            [' ', 'cat', ' ']
        ],

    playerTurn: 'X',
    counter: 0,
}

// incrementCounter() {
//     return counter++
// }

// catsScratch(){
//     return counter === 9;
// }

// resetBoard = () => {
//   return [
//     [' ', ' ', ' '],
//     [' ', ' ', ' '],
//     [' ', ' ', ' ']
//   ];
// }

// isValidInput = (row, column) => {
//   const validInputs = [0, 1, 2];
//   const isValid = validInputs.indexOf(row) > -1 && validInputs.indexOf(column) > -1;
//   return isValid
// }

// const isOpenForPlay = (row, column) => {
//   return board[row][column] === ' '
// }

// const checksArrayForPlayerWin = (arr) => {
//   return arr.every((item) => item === playerTurn)
// }

// const checkMatrixForWin = (board) => {
//   let results = board.filter(checksArrayForPlayerWin);
//   return results.length > 0
// }

// const horizontalWin = () => {
//   return checkMatrixForWin(board);
// }

// const rotateMatrix = (matrix) => {
//    let rotatedMatrix = []
//    for (var x = 0; x < matrix.length; x++) {
//        rotatedMatrix[x] = []
//        for (var y = 0; y < matrix.length; y++) {
//            rotatedMatrix[x][y] = matrix[y][x]
//        }
//    }
//    return rotatedMatrix
// }

// const verticalWin = () => {
//   return checkMatrixForWin(rotateMatrix(board))
// }

// const diagonalWin = () => {
//   const diagonalDown = [board[0][0], board[1][1], board[2][2]];
//   const diagonalUp = [board[2][0], board[1][1], board[0][2]];
//   return checkMatrixForWin([diagonalDown, diagonalUp]);
// }

// switchPlayer = () => {
//   if(this.playerTurn === 'X'){
//     let player = 'O'
//   } else {
//     let player = 'X'
//   }
//   return this.setState({playerTurn: player})
// }

// function checkForWin() {
//   const horizontal = horizontalWin();
//   const vertical = verticalWin();
//   const diagonal = diagonalWin();
//   return horizontal || vertical || diagonal
// }

// function ticTacToe(row, column) {
//   if(!isValidInput(row, column)){
//     return console.log('invalid entry, try again!')
//   }
//   if (!isOpenForPlay(row, column)) {
//     return console.log('Invalid move, try again!')
//   }
//   board[row][column] = playerTurn;
//   incrementCounter();
//   if (checkForWin()) {
//     console.log(`Player ${playerTurn} won!`)
//     board = resetBoard();
//   } 
//   if(catsScratch()){
//     console.log("It's a tie! Try again!")
//     board = resetBoard();
//   }
//   switchPlayer();
// }

// function getPrompt() {
//   printBoard();
//   console.log("It's Player " + playerTurn + "'s turn.");
//   rl.question('row: ', (row) => {
//     rl.question('column: ', (column) => {
//       ticTacToe(parseInt(row), parseInt(column));
//       getPrompt();
//     });
//   });

// }

handleBoard(board) {
    this.setState({board})
  }

render() {
    let board = this.state.board
    return (
      <div>
        <TicBoard informParent={(e) => this.handleBoard(e)}
        playerTurn={this.state.playerTurn}>
        {board}</TicBoard>
      </div>
    );
  }
};

export default TicTacGame;