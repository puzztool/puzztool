import React, { Component } from 'react';
import { Button, Panel } from 'react-bootstrap';
import LocalStorage from '../Data/LocalStorage';
import { version } from '../version';
import './Settings.css';

class Home extends Component {
  public render() {
    return (
      <div className="Settings">
        <div className="Settings-content">
          <Panel>
            <Panel.Heading>Saved state</Panel.Heading>
            <Panel.Body>
              <p>
                The most recent inputs to each tool are stored in the browser's
                local storage. In the event that state becomes corrupted it can
                be cleared using the button below.
              </p>
              <Button onClick={() => this.onClearClick()}>Clear saved state</Button>
            </Panel.Body>
          </Panel>
          <Panel>
            <Panel.Heading>About</Panel.Heading>
            <Panel.Body>
              <h3>PuzzTool</h3>
              Version: {version}<br/>
              <a href="https://github.com/beckbria/puzztool/" target="_blank">Project page</a>
            </Panel.Body>
          </Panel>
        </div>
      </div>
    );
  }

  private onClearClick() {
    LocalStorage.clear();
  }
}

export default Home;
