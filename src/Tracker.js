import React, { Component } from 'react'

export class Tracker extends Component {
  constructor(props) {
    super(props);
    this.symbol = props.symbol;
    this.purchasePrice = props.purchasePrice;
    this.id = props.id;
  }

  render() {
    return (
      <div>
        <div>{this.symbol}</div>
        <div>{this.purchasePrice}</div>
        <div>{this.id}</div>
      </div>
    )
  }
}

export default Tracker