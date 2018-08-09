import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import './Detail.css';
// import Skull from 'Skull.png';

class Detail extends Component {

    render() {
        const {
            charactersCopyWithId,
            match
        } = this.props
        console.log(charactersCopyWithId)
        console.log(this.props.match.params.id)

        return (

            <div className="detail__container">
                <Link to="/">Home </Link>
                <ul>
                    {charactersCopyWithId.map(function (item) {
                        if (item.id == match.params.id) {
                            return <li className="detail__element">
                                <div>
                                    <img src={item.image} alt="" />
                                </div>
                                <div>
                                    <h3 className=" ">{item.name}</h3>
                                    <p>Casa: {item.house}</p>
                                    <p>Nacimiento: {item.yearOfBirth}</p>
                                    <p>Patronus: {item.patronus}</p>
                                    <p>Estado: {item.alive ? ' viv@' : ' 💀'}</p>
                                </div>
                            </li>
                        }
                    })}
                </ul>
            </div>
        );
    }
}

export default Detail;