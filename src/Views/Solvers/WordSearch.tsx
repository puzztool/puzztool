import React, { Component } from 'react';
import WordSearchComponent from '../../Solvers/WordSearchComponent';
import './WordSearch.scss';

class WordSearch extends Component {
  public render() {
    return (
      <div className="WordSearch">
        <h2>Wordsearch solver</h2>
        <WordSearchComponent />
      </div>
    );
  }
}

export default WordSearch;
