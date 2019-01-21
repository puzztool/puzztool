import React, { Component } from 'react';
import WordSearchGrid from '../../Solvers/WordSearchGrid';

class WordSearch extends Component {
  public render() {
    return (
      <div className="Search">
        <p>
          Enter the list of words to find (one per line) on the left, and the grid to find words to search on the right
        </p>
        <WordSearchGrid />
      </div>
    );
  }
}

export default WordSearch;
