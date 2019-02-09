import React, { Component } from 'react';
import WordSearchComponent from '../../Solvers/WordSearchComponent';
import './WordSearch.css';

class WordSearch extends Component {
  public render() {
    return (
      <div className="Search">
        <div className="helpText">
          <p>
            Enter the list of words to find (one per line), and the grid to find words in
          </p>
        </div>
        <WordSearchComponent />
      </div>
    );
  }
}

export default WordSearch;
