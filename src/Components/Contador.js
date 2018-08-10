import React, { Component } from 'react';

class Contador extends Component {
    
    render() { 
        // const {value}= this.props
        const value = this.props.value
        return ( 
            <div>
                <p>{value}</p>
            </div>
         );
    }
}
 
export default Contador;