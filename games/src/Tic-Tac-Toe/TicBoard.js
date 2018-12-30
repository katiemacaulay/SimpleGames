import React from 'react'
import { Button } from 'semantic-ui-react'
import _ from 'lodash'
import gameFunctions from './game-functions'
console.log(gameFunctions)
class TicTacToeBoard extends React.Component{
    state = {
        board: gameFunctions.resetBoard(),
    }
    addMark(row, index){
        if(this.state.board[row][index] == ' '){
            let markedBoard = _.cloneDeep(this.state.board)
            markedBoard[row][index] = this.props.playerTurn
            this.setState({board: markedBoard})
            // this.props.informParent(event.target.value)
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
    handleChange = event => {
        this.setState({board: event.target.value });
        this.props.informParent(event.target.value)
      };
    
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