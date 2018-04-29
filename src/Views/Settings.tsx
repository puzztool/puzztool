import * as React from 'react';
import { Button } from 'react-bootstrap';
import LocalStorage from '../Data/LocalStorage';
import './Settings.css';

class Home extends React.Component {
  public render() {
    return (
      <div className="Settings">
        <div className="Settings-content">
          <Button onClick={() => this.onClearClick()}>Clear saved state</Button>
        </div>
      </div>
    );
  }

  private onClearClick() {
    LocalStorage.clear();
  }
}

export default Home;
