import React from 'react';
import './App.css';
import { Switch, Route } from 'react-router-dom'

import Homepage from './components/Homepage'
import LoginPage from './components/LoginPage'
import SignupPage from './components/SignupPage'
import Map from './components/Map'


function App() {
  return (
    <Switch>
      <Route exact path='/' component={Homepage} />
      <Route path='/signup' component={SignupPage} />
      <Route path='/login' component={LoginPage} />
      <Route path='/map' component={Map} />
    </Switch>
  );
}

export default App;
