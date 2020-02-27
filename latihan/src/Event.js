import React, { Component } from 'react';

export default class MenanganiEvent extends Component {
    constructor() {
        super();
        this.state = { data: '' };
    }

    handleChange = (event) => {
        this.setState({ data: event.target.value })
    }

    render() {
        return (
            <div>
                <input type="text" onChange={this.handleChange} />
                <h3>{this.state.data}</h3>
            </div>
        );
    }
}
