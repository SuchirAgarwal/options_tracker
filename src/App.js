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
    this.state = JSON.parse(window.sessionStorage.getItem('state')) || {
      trackers: [],
      numTrackers: 0,
    }
    this.setState = this.setState.bind(this);
    this.addTrackerSubmit = this.addTrackerSubmit.bind(this);
  }

  setState(state) {
    window.sessionStorage.setItem('state', JSON.stringify(Object.assign(this.state, state)));
    super.setState(state);
  }

  addTrackerSubmit(symbol, price) {
    this.setState({
      trackers: [
        ...this.state.trackers, 
        {
          symbol,
          purchasePrice: price,
          id: this.state.numTrackers,
        },
      ],
      numTrackers: this.state.numTrackers + 1,
    });
  }

  render() {
    return (
      <Router>
        <Routes>
          <Route exact path='/' element={< TrackerList trackers={this.state.trackers} numTrackers={this.state.numTrackers} />}></Route>
          <Route exact path='/addtracker' element={< AddTracker handleSubmit={this.addTrackerSubmit} />}></Route>
        </Routes>
        <AddTrackerButton />
      </Router>
    );
  }
}

export default App;
