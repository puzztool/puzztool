import React from 'react';
import { Link } from 'react-router-dom';
import './NotFound.scss';

function NotFound() {
  return (
    <div className="NotFound">
      <h1>Not Found</h1>
      <p>If this was reached in error, use the navigation options or go <Link to="/">home</Link>.</p>
    </div>
  );
}

export default NotFound;
