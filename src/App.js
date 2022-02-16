import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import NavBar from './NavBar';
import Home from './Home';
import Players from './Players';
import NewPlayerForm from './NewPlayerForm';
import Team from './Team';
import Player from './Player';
import './App.css';

function App() {
  return (
    <Router>
      <NavBar />
      <div>
        <div className="App">
          <Switch>
            <Route exact path='/' component={Home} />
            <Route exact path='/players' component={Players} />
            <Route exact path='/players/new' component={NewPlayerForm} />
            <Route exact path='/team' component={Team} />
            {/* <Route path='/players/:id' component={Player} /> */}
          </Switch>
        </div>
      </div>
    </Router>
  );
}

export default App;
