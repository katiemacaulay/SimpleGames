import React from 'react'
// import { Item } from '../../node_modules/semantic-ui-react';
// import Row from './Row'

class Mastermind extends React.Component{
    state = {
        message: "let's play!",
        board: [],
        turn: 0,
        color: "bg-green",
        changeColor: "dot bg-blue"
    }

makeRows(){
    let board = []
    for(let i=0; i<10; i++){
        board.push([0,7,9,0])
    }
    this.setState({board})
}

returnArray=()=>{
    console.log(this.state.board,"component did mount")
}

componentDidMount(){
    this.makeRows()
}

changeColor(){
    return 
}

styles(){
    return "dot " + this.state.color
}
    
    render() {
        return (
            <div className="App-header">
                <div>{this.state.message}</div>
                {this.state.board.map((item, turn) => {
                    return <div key={turn}> 
                        <button onClick={() => this.changeColor()} className="dot bg-white"></button>
                        <button onClick={() => this.changeColor()} className="dot bg-white"></button>
                        <button onClick={() => this.changeColor()} className="dot bg-white"></button>
                        <button onClick={() => this.changeColor()} className={this.styles()}></button>
                    </div>
                })}
            </div>
        );
      }
    };
    
export default Mastermind