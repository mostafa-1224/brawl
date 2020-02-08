import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Nav from './Nav';
import Home from './Home';
import Profile from './Profile';
import Brawlers from './Brawlers';
import BrawlerInfo from './BrawlerInfo';
import './App.css';


function App() {
  return (
    <div className="App">
      <Router>
        <Nav />
        <Switch>
        <Route path = '/' exact component = {Home} />
        <Route path = '/profile' component = {Profile} />
        <Route path = '/brawlers' exact component = {Brawlers} />
        <Route path = '/brawlerInfo/:id' exact component = {BrawlerInfo} />
        </Switch>
        <div style={{height:'500px'}}></div>
      </Router>
    </div>
  );
}

export default App;
