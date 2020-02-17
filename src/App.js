import React from 'react';
import Nav from './components/Nav';
import Feed from './components/Feed';
import Profile from './components/Profile';
import People from './components/People';
import { Route } from 'react-router-dom';
import './App.css';

function App() {
  return (
    <div className="App">
      <header>
        <Nav />
      </header>
      <div className="content">
        <div className="leftSide">
          <Route path="/feed" component={ Feed } />
          <Route path="/people" component={ People } />
        </div>
        <div className="rightSide">
          <Profile />
        </div>
      </div>
      <footer>

      </footer>
    </div>
  );
}

export default App;
