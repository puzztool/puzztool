import React, { Component } from 'react';
import WordSearchComponent from '../../Solvers/WordSearchComponent';
import './WordSearch.css';

class WordSearch extends Component {
  public render() {
    return (
      <div className="Search">
        <div className="helpText">
          <p>
            Wordsearch solver.  Enter text below.
          </p>
        </div>
        <WordSearchComponent />
      </div>
    );
  }
}

export default WordSearch;
