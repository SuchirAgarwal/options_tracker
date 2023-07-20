import React, { Component } from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './App.css';
import Tracker from './Tracker';
import TrackerList from './TrackerList';
import AddTracker from './AddTracker';
import AddTrackerButton from './AddTrackerButton';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      trackers: [3, 3],
      numTrackers: 0,
    }
    this.addTrackerSubmit = this.addTrackerSubmit.bind(this);
  }

  addTrackerSubmit(symbol, price) {
    this.state.trackers.push(<Tracker symbol={symbol} purchasePrice={price} id={this.state.numTrackers} />);
    this.setState({ numTrackers: this.state.numTrackers + 1})
  }

  render() {
    return (
      <Router>
        <Routes>
          <Route exact path='/' element={< TrackerList trackers={this.state.trackers} />}></Route>
          <Route exact path='/addtracker' element={< AddTracker handleSubmit={this.addTrackerSubmit} />}></Route>
        </Routes>
        <AddTrackerButton />
      </Router>
    );
  }
}

export default App;
