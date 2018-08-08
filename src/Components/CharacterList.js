import React, { Component } from 'react';
import CharacterCard from './CharacterCard';

class CharacterList extends Component {

    render() {
        const {
            characters,
            charactersFiltered
        } = this.props
        
        console.log(this.props.charactersFiltered)
        let filterNoFilter
        if (charactersFiltered.length > 0) {
            filterNoFilter=charactersFiltered
        } else {
            filterNoFilter=characters
        }
        return (
            <div>
                <ul className="listado">
                    {filterNoFilter.map(character =>
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