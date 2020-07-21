import React from 'react';
import { Link } from 'react-router-dom';
import PuzzToolPage from '../../Common/PuzzToolPage';
import './NotFound.scss';

function NotFound() {
  return (
    <PuzzToolPage title="Not Found">
      <div className="NotFound">
        <h1>Not Found</h1>
        <p>If this was reached in error, use the navigation options or go <Link to="/">home</Link>.</p>
      </div>
    </PuzzToolPage>
  );
}

export default NotFound;
