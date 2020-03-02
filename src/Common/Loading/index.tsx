import React from 'react';
import { LoadingComponentProps } from 'react-loadable';
import './index.scss';

function Loading(props: LoadingComponentProps) {
  function getContent() {
    if (props.error) {
      return (
        <div className="Loading-content">
          <div className="Loading-error" />
          <div>Failed to load content</div>
        </div>
      );
    } else if (props.timedOut) {
      return (
        <div className="Loading-content">
          <div className="Loading-error" />
          <div>Timed out while loading content</div>
        </div>
      );
    } else if (props.pastDelay) {
      return (
        <div className="Loading-content">
          <div className="Loading-spinner" />
          <div>Loading</div>
        </div>
      );
    } else {
      return null;
    }
  }

  return (
    <div className="Loading">
      {getContent()}
    </div>
  );
}

export default Loading;
