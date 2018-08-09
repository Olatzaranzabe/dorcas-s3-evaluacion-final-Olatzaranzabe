import React, { Component } from 'react';
import { Link } from 'react-router-dom';

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
                {/* <Link to="/">Home </Link> */}
                <ul>
                    {charactersCopyWithId.map(function (item, index) {

                        if (item.id == match.params.id) {
                            return <li>
                                <div>
                                    <img src={item.image} alt="" />
                                </div>
                                <div>
                                    <h3>{item.name}</h3>
                                    <p>{item.yearOfBirth}</p>
                                    <p>{item.patronus}</p>
                                    <p>{item.house}</p>
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