import React, { Component } from 'react'
import Tracker from './Tracker'

const trackers = [
  { 
    id: 1
  },
  {
    id: 2
  },
];

export class TrackerList extends Component {

  render() {
    return (
      <div>
        {trackers.map(tracker => <Tracker id={tracker.id} />)}
      </div>
    )
  }
}

export default TrackerList