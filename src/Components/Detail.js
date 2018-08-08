import React, { Component, Fragment } from 'react';

class Detail extends Component {
    
    render() { 
        const {
            characters,
        } = this.props

        return ( 
          
            <div className="detail__container">
                <img src="" alt=""/>
                <h2>Hola</h2>
                <ul>
                    <li>Casa:</li>
                    <li>Nacimiento:</li>
                    <li>Patronus:</li>
                    <li>Estado:</li>   
                </ul>
            </div>
         );
    }
}
 
export default Detail;