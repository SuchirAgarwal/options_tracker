import React, { Component } from 'react'
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import './App.css';
import TrackerList from './TrackerList';
import AddTracker from './AddTracker';
import AddTrackerButton from './AddTrackerButton';

class App extends Component {
  render() {
    return (
      <Router>
        <Routes>
          <Route exact path='/' element={< TrackerList />}></Route>
          <Route exact path='/addtracker' element={< AddTracker />}></Route>
        </Routes>
        <AddTrackerButton />
      </Router>
    );
  }
}

export default App;
