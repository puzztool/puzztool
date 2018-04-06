import * as React from 'react';
import './Home.css';

const version = require('version');

class Home extends React.Component {
  public render() {
    return (
      <div className="Home">
        <div className="Home-content">
          <h1>Puzzle Tools v{version}</h1>
          <p>A collection of useful tools for puzzle solving</p>
        </div>
      </div>
    );
  }
}

export default Home;
