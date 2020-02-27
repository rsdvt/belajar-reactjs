import React, { Component } from 'react';
import './App.css'

export default class InteraktifState extends Component {
    constructor(props) {
        super(props);
        this.state = { salam: 'Hello' };
    }
    salamkan = () => {
        this.setState({ salam: 'Hey You' })
    }
    render() {
        return (
            <div className="warna"> {this.state.salam} {this.props.nama} {this.props.belakang}!
            <br />
                <button onClick={this.salamkan}>Salam!</button>
            </div>
        );
    }
}
