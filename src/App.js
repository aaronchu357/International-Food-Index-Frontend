import React from 'react';
import './App.css';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom'
import Homepage from './components/Homepage'
import Map from './components/Map'

function App() {
  return (
    <div className="App">
      <Router>
        <Route path='/' exact component={Homepage} />
        <Route path='/map' exact component={Map} />
      </Router>
    </div>
  );
}

export default App;
