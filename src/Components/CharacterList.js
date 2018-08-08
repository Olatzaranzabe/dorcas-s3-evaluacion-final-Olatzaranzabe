import React, { Component } from 'react';
import CharacterCard from './CharacterCard';

class CharacterList extends Component {

    render() {
        const { 
            characters,
            charactersFiltered
        
        } = this.props
        return (
            <div>
                <ul className="listado">
                    {(charactersFiltered||characters).map(character =>
                        (<li className="listElement">
                            <CharacterCard
                                name={character.name}
                                image={character.image}
                                house={character.house}
                            />
                        </li>)
                    )}
                </ul>
            </div>
        );
    }
}

export default CharacterList;