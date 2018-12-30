import React from 'react'
import { Button } from 'semantic-ui-react'
import _ from 'lodash'
import gameFunctions from './game-functions'

class TicTacToeBoard extends React.Component{
    state = {
        board: [
            [' ', ' ', ' '],
            [' ', ' ', ' '],
            [' ', ' ', ' ']
          ],
        playerTurn: 'X',
        counter: 0,
        message: 'Tic-Tac-Toe'
    }
    
    addMark(row, index){
        if(this.state.board[row][index] == ' '){
            let markedBoard = _.cloneDeep(this.state.board)
            markedBoard[row][index] = this.props.playerTurn
            this.setState({board: markedBoard})
            this.ticTacToe(markedBoard, this.state.playerTurn, row, index)
        }
    }

    createBoard(row){
        let board = this.state.board[row]
        return board.map((boardSquare, index) => {
            return <td key={`${row}-${index}`}>
            <Button onClick={() => this.addMark(row, index)} 
            className='w4 h4 fw9 f2 avenir ba'>
            {boardSquare}</Button>
            </td>
        })
    }

    ticTacToe(board, playerTurn, row, column) {
        board[row][column] = playerTurn;
        gameFunctions.incrementCounter();
        if (gameFunctions.checkForWin(this.state.board)) {
          this.setState({message: {playerTurn} + ' won!'})
        } 
        if(gameFunctions.catsScratch()){
          this.setState({message: 'Tie!'})
        }
        gameFunctions.switchPlayer();
      }
    
    render() {
        return (
            <div>
                <table>
                    <tbody> 
                        <tr className="h4 w4">
                            {this.createBoard(0)}
                        </tr>
                        <tr className="h4 w4">
                            {this.createBoard(1)}
                        </tr>
                        <tr className="h4 w4">
                            {this.createBoard(2)}
                        </tr>
                    </tbody>
                </table>
            </div>
        );
      }
    };
    
export default TicTacToeBoard