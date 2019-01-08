import React from 'react'
// import { Item } from '../../node_modules/semantic-ui-react';
// import { Item } from '../../node_modules/semantic-ui-react';
// import Row from './Row'

class Mastermind extends React.Component{
    // [], [], [], [], [], [], [], [], [], []

    state = {
        message: "let's play!",
        board: [],
        turn: 0,
        color: "bg-green",
        changeColor: "dot bg-blue",
        dotClicked: false
    }
initRow() {
    const row = []
    for(let i=0; i<4; i++){
        row.push({
            colorClass: 'dot bg-white'
        })
    }
    return row
}
makeBoard(){
    let board = []
    for(let i=0; i<10; i++){
        board.push(this.initRow())
    }
    this.setState({board})
}

handleClick(item, rowIndex) {
    if (rowIndex !== this.state.turn) {
        return
    }
    item.isClicked = true
    item.colorClass = 'dot bg-blue'
    this.setState(this.state.board)
}
makeRows(){
    return this.state.board.map((row, i) => {
        return <div  key={i} > {row.map((item, turn) => {
            return <button key={turn-1} 
                onClick={() => this.handleClick(item, i)} 
                className={item.colorClass}>
            </button>
        })}
        </div>
  })
}


returnArray=()=>{
    console.log(this.state.board,"component did mount")
}

componentDidMount(){
    this.makeBoard()
}

// getClassName(){
//     if(this.state.dotClicked){
//         className=""
//     }
// }
    
    render() {
        return (
            <div className="App-header">
                <div>{this.state.message}</div>
                 {this.makeRows()}
               </div>
        );
      }
    };
    
export default Mastermind