import React, { Component } from 'react'
import { Link } from 'react-router-dom';


export class AddTrackerButton extends Component {
  constructor(props) {
    super(props);
    this.state = {
      viewingTrackers: true,
    };
    this.handleClick = this.handleClick.bind(this);
  }

  handleClick() {
    this.setState({ viewingTrackers: !this.state.viewingTrackers });
    // console.log('here')
  }

  render() {
    const viewingTrackers = this.state.viewingTrackers
    // console.log(viewingTrackers);
    return (
      <div>
        {viewingTrackers 
          ? <Link onClick={this.handleClick} to="/addtracker">Add Tracker</Link>
          : <Link onClick={this.handleClick} to="/">View Trackers</Link>
        }
      </div>
    )
  }
}

export default AddTrackerButton