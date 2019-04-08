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

const checksRowForPlayerWin = (playerTurn, row, board) => {
  return board[row].every((item) => item === playerTurn)
}

const horizontalWin = (playerTurn, row, board) => {
  return checksRowForPlayerWin(playerTurn, row, board)
}

const rotateBoard = (board) => {
   let rotatedBoard = []
   for (var x = 0; x < board.length; x++) {
       rotatedBoard[x] = []
       for (var y = 0; y < board.length; y++) {
           rotatedBoard[x][y] = board[y][x]
       }
   }
   return rotatedBoard
}

const verticalWin = (playerTurn, column, board) => {
  return checksRowForPlayerWin(playerTurn, column, rotateBoard(board))
}

const checksDiagonalForPlayerWin = (playerTurn, diagonalArr) => {
  return diagonalArr.every((item) => item === playerTurn)
}

const diagonalWin = (playerTurn, board) => {
  const diagonalDown = [board[0][0], board[1][1], board[2][2]];
  const diagonalUp = [board[2][0], board[1][1], board[0][2]];
  return checksDiagonalForPlayerWin(playerTurn, diagonalDown) ||
  checksDiagonalForPlayerWin(playerTurn, diagonalUp)
}

function checkForWin(board, playerTurn, row, column) {
  const horizontal = horizontalWin(playerTurn, row, board);
  const vertical = verticalWin(playerTurn, column, board);
  const diagonal = diagonalWin(playerTurn, board);
  return horizontal || vertical || diagonal
}


module.exports = {
    rotateBoard,
    resetBoard,
    incrementCounter,
    catsScratch,
    isOpenForPlay,
    checksRowForPlayerWin,
    horizontalWin,
    verticalWin,
    diagonalWin,
    checkForWin,
}