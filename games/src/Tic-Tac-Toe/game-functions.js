// (markedBoard, this.state.playerTurn, row, index)


function incrementCounter(counter) {
    return counter++
}

function catsScratch(counter){
    return counter === 9;
}

const resetBoard = () => {
  return [
    [' ', ' ', ' '],
    [' ', ' ', ' '],
    [' ', ' ', ' ']
  ];
}

const isOpenForPlay = (board, row, column) => {
  return board[row][column] === ' '
}

const checksRowForPlayerWin = (playerTurn, row) => {
  return row.every((item) => item === playerTurn)
}

const horizontalWin = (playerTurn, row) => {
  return checksRowForPlayerWin(playerTurn, row)
}

const rotateMatrix = (matrix) => {
   let rotatedMatrix = []
   for (var x = 0; x < matrix.length; x++) {
       rotatedMatrix[x] = []
       for (var y = 0; y < matrix.length; y++) {
           rotatedMatrix[x][y] = matrix[y][x]
       }
   }
   return rotatedMatrix
}

const verticalWin = (board) => {
  return checkMatrixForWin(rotateMatrix(board))
}

const diagonalWin = (board) => {
  const diagonalDown = [board[0][0], board[1][1], board[2][2]];
  const diagonalUp = [board[2][0], board[1][1], board[0][2]];
  return checkMatrixForWin([diagonalDown, diagonalUp]);
}

const switchPlayer = (player) => {
  if(this.playerTurn === 'X'){
    let player = 'O'
  } else {
    let player = 'X'
  }
  return this.setState({playerTurn: player})
}

function checkForWin(board, playerTurn, row, column) {
  const horizontal = horizontalWin(playerTurn, row);
  const vertical = verticalWin(board);
  const diagonal = diagonalWin(board);
  return horizontal || vertical || diagonal
}

// function ticTacToe(board, playerTurn, row, column) {
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

// // function getPrompt() {
// //   printBoard();
// //   console.log("It's Player " + playerTurn + "'s turn.");
// //   rl.question('row: ', (row) => {
// //     rl.question('column: ', (column) => {
// //       ticTacToe(parseInt(row), parseInt(column));
// //       getPrompt();
// //     });
// //   });

module.exports = {
    resetBoard,
    incrementCounter,
    catsScratch,
    isOpenForPlay,
    checksRowForPlayerWin,
    checkMatrixForWin,
    horizontalWin,
    rotateMatrix,
    verticalWin,
    diagonalWin,
    switchPlayer,
    checkForWin,
    // ticTacToe,
}