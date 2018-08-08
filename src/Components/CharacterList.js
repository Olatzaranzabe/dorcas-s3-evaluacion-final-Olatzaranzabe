import React, { Component } from 'react';
import CharacterCard from './CharacterCard';
import {Link} from 'react-router-dom';

class CharacterList extends Component {

    render() {
        const {
            characters,
            charactersFiltered
        } = this.props

        console.log(this.props.charactersFiltered)
        let filterNoFilter
        if (charactersFiltered.length > 0) {
            filterNoFilter = charactersFiltered
        } else {
            filterNoFilter = characters
        }
        return (
            <div>
                <ul className="listado">
                    {filterNoFilter.map(character =>
                        (<li key={character.id} className="listElement">
                            <Link className="character__detail" to={`/character/${character.id}`}>
                                <CharacterCard
                                    name={character.name}
                                    image={character.image}
                                    house={character.house}
                                />
                            </Link>
                        </li>)
                    )}
                </ul>
            </div>
        );
    }
}

export default CharacterList;