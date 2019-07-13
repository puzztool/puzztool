import React, { Component } from 'react';
import WordSearchComponent from '../../Solvers/WordSearchComponent';
import './WordSearch.scss';

class WordSearch extends Component {
  public render() {
    return (
      <div className="WordSearch">
        <div className="WordSearch-helpText">
          <h2>
            Wordsearch solver
          </h2>
        </div>
        <WordSearchComponent />
      </div>
    );
  }
}

export default WordSearch;
