import React, { Component } from 'react';
import WordSearchGrid from '../../Solvers/WordSearchGrid';

class WordSearch extends Component {
  public render() {
    return (
      <div className="Search">
        <p>
          Enter the text and words that you want to find
        </p>
        <p>
          <WordSearchGrid />
        </p>
      </div>
    );
  }
}

export default WordSearch;
