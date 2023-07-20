import React, { Component } from 'react'
import Tracker from './Tracker'

export class TrackerList extends Component {
  constructor(props) {
    super(props);
    this.state = {
      trackers: props.trackers,
      numTrackers: 0,
    };
  }

  render() {
    return (
      <div>
        {this.state.trackers}
      </div>
    )
  }
}

export default TrackerList