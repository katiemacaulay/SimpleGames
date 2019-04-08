import React from 'react'

class Row extends React.Component{
    
    render() {
        return (
            <div>
                <div>
                    {/* bg-color */}
                    <button className="dot bg-white"></button>
                    <button className="dot bg-white"></button>
                    <button className="dot bg-white"></button>
                    <button className="dot bg-white"></button>
                </div>
            </div>
        );
      }
    };
    
export default Row