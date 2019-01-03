import React from 'react'
import Row from './Row'

class Mastermind extends React.Component{
    state = {
        message: "let's play!"
    }

    
    render() {
        return (
            <div className="App-header">
                <div>{this.state.message}</div>
                <Row/>
            </div>
        );
      }
    };
    
export default Mastermind