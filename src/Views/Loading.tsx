import * as React from 'react';
import * as Loadable from 'react-loadable';
import './Loading.css';

class Loading extends React.Component<Loadable.LoadingComponentProps> {
  public render() {
    return (
      <div className="Loading">
        {this.getContent()}
      </div>
    );
  }

  private getContent() {
    if (this.props.error) {
      return (
        <div className="Loading-content">
          <div className="Loading-error" />
          <div>Failed to load content</div>
        </div>
      );
    } else if (this.props.timedOut) {
      return (
        <div className="Loading-content">
          <div className="Loading-error" />
          <div>Timed out while loading content</div>
        </div>
      );
    } else if (this.props.pastDelay) {
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
}

export default Loading;
