import React from 'react';
import WordSearchComponent from '../../Solvers/WordSearchComponent';
import './WordSearch.scss';

function WordSearch() {
  return (
    <div className="WordSearch">
      <h2>Word Search</h2>
      <WordSearchComponent />
    </div>
  );
}

export default WordSearch;
