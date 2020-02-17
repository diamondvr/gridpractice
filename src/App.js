import React from 'react';
import Nav from './components/Nav';
import Feed from './components/Feed';
import Profile from './components/Profile';
import './App.css';

function App() {
  return (
    <div className="App">
      <header>
        <Nav />
      </header>
      <div className="content">
        <div className="leftSide">
          <Feed />
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
