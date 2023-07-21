import React, { Component } from 'react'
import Tracker from './Tracker'

export class TrackerList extends Component {
  constructor(props) {
    super(props);
    this.state = {
      trackers: props.trackers,
      numTrackers: props.numTrackers,
    };
  }

  render() {
    return (
      <div>
        {this.state.trackers.map(
          (tracker) => <Tracker symbol={tracker.symbol} purchasePrice={tracker.purchasePrice} id={tracker.id} />
        )}
      </div>
    )
  }
}

export default TrackerList