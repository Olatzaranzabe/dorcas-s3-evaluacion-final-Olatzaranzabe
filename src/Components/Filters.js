import React, { Component } from 'react';

class Filters extends Component {
render() {
    const { onInputChange } = this.props
    return (
        <div>
            <input type="text" onChange={onInputChange} />
        </div>
    );
}
}

export default Filters;