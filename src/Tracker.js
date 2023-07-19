import React, { Component } from 'react'

export class Tracker extends Component {
  constructor(props) {
    super(props);
    this.id = props.id;
  }

  render() {
    return (
      <div>{this.id}</div>
    )
  }
}

export default Tracker