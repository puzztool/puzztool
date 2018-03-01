import * as React from 'react';
import { RouteComponentProps } from 'react-router';
import Header from 'Common/Header';
import BrailleStream from 'Braille/BrailleStream';
import './Braille.css';

class Braille extends React.Component<RouteComponentProps<void>> {
  public render() {
    return (
      <div className="Braille">
        <Header history={this.props.history} title="Braille" />
        <div className="Braille-content">
          <BrailleStream />
        </div>
      </div>
    );
  }
}

export default Braille;
