import React, { Component } from 'react';
import WordSearchComponent from '../../Solvers/WordSearchComponent';
import './WordSearch.css';

class WordSearch extends Component {
  public render() {
    return (
      <div>
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
