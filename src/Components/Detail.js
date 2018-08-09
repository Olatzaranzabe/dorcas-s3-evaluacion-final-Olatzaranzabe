import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class Detail extends Component {

    render() {
        const {
            charactersCopyWithId,
            match,
        } = this.props
        console.log(charactersCopyWithId)
        console.log(this.props.match)
        console.log(match)
        const theCharacter = {}
        if (this.props.charactersCopyWithId.length >= 1) {
            const filtroID = this.props.match.params.id;
            const charactersCopyWithId = this.props.charactersCopyWithId;
            console.log(filtroID)
            console.log(this.props.charactersCopyWithId)
            charactersCopyWithId.filter((item) => {
                return item.id === filtroID;
            });
            const theCharacter = charactersCopyWithId[0];

            console.log(theCharacter.house)
        }
        const house = theCharacter.house
        return (

            <div className="detail__container">
                <Link to="/">Home </Link>
                <img src="" alt="" />
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