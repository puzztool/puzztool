import * as React from 'react';
import { History as BrowserHistory } from 'history';
import './Header.css';

type Props = {
  history?: BrowserHistory;
  title: string;
};

class Header extends React.Component<Props> {
  public render() {
    return (
      <div className="Header">
        { this.canGoBack() ? 
        <button className="Header-backButton" onClick={() => this.onBackClick()}>
          <svg viewBox="0 0 60 60">
            <g stroke="black" stroke-width="6">
              <path stroke-linecap="round" d="M5 30 l20 -20" />
              <path stroke-linecap="round" d="M5 30 l50 0" />
              <path stroke-linecap="round" d="M5 30 l20 20" />
            </g>
            Sorry, your browser does not support inline SVG.
          </svg>
        </button>
        : '' }
        <h1>{this.props.title}</h1>
      </div>
    );
  }

  private onBackClick() {
    if (this.props.history) {
      this.props.history.goBack();
    }
  }

  private canGoBack() {
    return !!this.props.history;
  }
}

export default Header;
