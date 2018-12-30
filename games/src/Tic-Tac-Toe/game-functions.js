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


const isValidInput = (row, column) => {
  const validInputs = [0, 1, 2];
  const isValid = validInputs.indexOf(row) > -1 && validInputs.indexOf(column) > -1;
  return isValid
}

const isOpenForPlay = (board, row, column) => {
  return board[row][column] === ' '
}

const checksArrayForPlayerWin = (playerTurn, arr) => {
  return arr.every((item) => item === playerTurn)
}

const checkMatrixForWin = (board) => {
  let results = board.filter(checksArrayForPlayerWin);
  return results.length > 0
}

const horizontalWin = (board) => {
  return checkMatrixForWin(board);
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

function checkForWin() {
  const horizontal = horizontalWin();
  const vertical = verticalWin();
  const diagonal = diagonalWin();
  return horizontal || vertical || diagonal
}

function ticTacToe(board, playerTurn, row, column) {
  if(!isValidInput(row, column)){
    return console.log('invalid entry, try again!')
  }
  if (!isOpenForPlay(row, column)) {
    return console.log('Invalid move, try again!')
  }
  board[row][column] = playerTurn;
  incrementCounter();
  if (checkForWin()) {
    console.log(`Player ${playerTurn} won!`)
    board = resetBoard();
  } 
  if(catsScratch()){
    console.log("It's a tie! Try again!")
    board = resetBoard();
  }
  switchPlayer();
}

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
    isValidInput,
    isOpenForPlay,
    checksArrayForPlayerWin,
    checkMatrixForWin,
    horizontalWin,
    rotateMatrix,
    verticalWin,
    diagonalWin,
    switchPlayer,
    checkForWin,
    ticTacToe,
}