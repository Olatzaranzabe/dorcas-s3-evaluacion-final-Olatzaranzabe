import React, { Component } from 'react';

class CharacterCard extends Component {
 
    render() { 
        const {
            name,
            image,
            house,
        } = this.props
        return ( 
            <div>
                <h2>{name}</h2>
                <img src={image} alt=""/>
                <p>{house}</p>
            </div>
         );
    }
}
 
export default CharacterCard;