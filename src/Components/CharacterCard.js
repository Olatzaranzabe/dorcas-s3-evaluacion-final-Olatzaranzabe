import React, { Component } from 'react';

class CharacterCard extends Component {
 
    render() { 
        const {
            onSelectCharacter,
            name,
            image,
            house,
        } = this.props
        return ( 
            <div >
                 <img className="element__photo" src={image} alt=""/>
                <h2 className="element__name" onClick={onSelectCharacter}>{name}</h2>               
                <p className="element__house">{house}</p>
            </div>
         );
    }
}
 
export default CharacterCard;