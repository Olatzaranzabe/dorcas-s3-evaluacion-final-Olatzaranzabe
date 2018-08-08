import React, { Component } from 'react';
import {Link} from 'react-router-dom';

class Detail extends Component {

    render() {
        const {
            charactersCopyWithId,
            characters,
            house,
            dateOfBirth,
            patronus,
            alive
        } = this.props
      console.log(this.props.charactersCopyWithId)
      console.log(charactersCopyWithId.dateOfBirth)
        return (

            <div className="detail__container">
                <Link to="/">Home </Link>
                <img src="" alt="" />
                <h2>Hola</h2>
                <ul>
                    <li>Casa:</li>
                    <li>Nacimiento:{charactersCopyWithId.dateOfBirth}</li>
                    <li>Patronus:</li>
                    <li>Estado:</li>
                </ul>
            </div>
        );
    }
}

export default Detail;