import React, { Component } from 'react';
import CharacterCard from './CharacterCard';
import { Link } from 'react-router-dom';
import './CharacterList.css';

class CharacterList extends Component {

    render() {
        const {
            charactersFiltered,
            charactersCopyWithId,
            clickElement
        } = this.props
        console.log(charactersCopyWithId)
        console.log(this.props.charactersFiltered)
        let filterNoFilter
        if (charactersFiltered.length > 0) {
            filterNoFilter = charactersFiltered
        } else {
            filterNoFilter = charactersCopyWithId
        }
        console.log(charactersCopyWithId)

        return (
            <div>
                <ul className="listado">
                    {filterNoFilter.map((character, index) =>
                        (<li key={index} className="listElement" onClick={clickElement}>
                            {/* <Link className="character__detail" to={`/character/${character.id}`} > */}
                                <CharacterCard
                                    image={character.image}
                                    name={character.name}
                                    house={character.house}
                                />
                            {/* </Link> */}
                        </li>)
                    )}
                </ul>
            </div>
        );
    }
}

export default CharacterList;