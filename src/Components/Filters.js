import React, { Component, Fragment } from 'react';

class Filters extends Component {

    render() {
        const { onInputChange } = this.props

        return (
            <Fragment>
                <input type="text" onChange={onInputChange} />
            </Fragment>
        );
    }
}

export default Filters;