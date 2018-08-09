import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import './Detail.css';

class Detail extends Component {

    render() {
        const {
            charactersCopyWithId,
        } = this.props
        console.log(charactersCopyWithId)
        console.log(this.props.match.params.id)
        const matchId = this.props.match.params.id
        const matchParamsId = parseInt(matchId);
        
        return (
            <div className="detail__container">
                <Link to="/"><button className="link__home">Home </button> </Link>
                <ul>
                    {charactersCopyWithId.map(function (item) {
                        if (item.id === matchParamsId) {
                            return(
                            <li className="detail__element">
                                <div>
                                    <img className="detail__image" src={item.image} alt="character image" />
                                </div>
                                <div className="detail__character">
                                    <h3 className=" ">{item.name}</h3>
                                    <p>Casa: {item.house}</p>
                                    <p>Nacimiento: {item.yearOfBirth}</p>
                                    <p>Patronus: {item.patronus}</p>
                                    <p>Estado: {item.alive ? ' viv@' : ' 💀'}</p>
                                </div>
                            </li>
                            )
                        }
                    })}
                </ul>
            </div>
        );
    }
}

export default Detail;