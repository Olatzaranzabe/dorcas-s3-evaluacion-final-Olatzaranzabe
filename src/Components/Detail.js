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
        // const status = 
        // if(charactersCopyWithId.alive ==true){
        //     return 'viv@'
        // } else {
        //     'muert@'
        // }

        return (

            <div className="detail__container">
                <Link to="/">Home </Link>
                <ul>
                    {charactersCopyWithId.map(function (item, index) {
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
                                    <p>Estado: {item.alive?' viv@':' muert@'}</p>
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