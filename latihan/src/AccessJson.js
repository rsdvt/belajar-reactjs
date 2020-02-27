import React, { Component } from 'react';

export default class AccessJson extends Component {
    constructor(){
        super();
        this.state = { homestays : [] }
    }
    componentDidMount() {
        fetch("https://raw.githubusercontent.com/algosigma/js-reactjs/master/homestays.json")
        .then(response => response.json())
        .then((data) => {
            this.setState({ homestays: data });
        })
    }
  render() {
    return (
      <div>
          {
              this.state.homestays.map((dinamis, key) =>
                <div>
                    <h3>{dinamis.nama} - Rp. {dinamis.harga} rb</h3>
                </div>
              )
          }
      </div>
    );
  }
}
