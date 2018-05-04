import * as React from 'react';
import './Home.css';

const version = require('../version');

class Home extends React.Component {
  public render() {
    return (
      <div className="Home">
        <div className="Home-content">
          <h1>PuzzTool v{version}</h1>
          <p>
            A collection of useful tools to help with encodings and ciphers used
            in puzzle competitions such
            as <a href="https://en.wikipedia.org/wiki/Microsoft_Puzzle_Hunt" target="_blank">
              Puzzle Hunt
            </a>, <a href="http://www.mit.edu/%7Epuzzle/" target="_blank">
              Mystery Hunt
            </a>, <a href="http://www.puzzledpint.com/" target="_blank">
              Puzzled Pint
            </a>, and many others.
          </p>
        </div>
      </div>
    );
  }
}

export default Home;
