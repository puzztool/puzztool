import React from 'react';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import CardDeck from 'react-bootstrap/CardDeck';
import LocalStorage from '../Data/LocalStorage';
import { version } from '../version';
import './Settings.scss';

function Settings() {
  function onClearClick() {
    LocalStorage.clear();
  }

  return (
    <div className="Settings">
      <div className="Settings-content">
        <CardDeck>
          <Card>
            <Card.Header>Saved state</Card.Header>
            <Card.Body>
              <p>
                The most recent inputs to each tool are stored in the browser's
                local storage. In the event that state becomes corrupted it can
                be cleared using the button below.
                </p>
              <Button
                onClick={onClearClick}
                variant="danger"
              >
                Clear saved state
              </Button>
            </Card.Body>
          </Card>
          <Card>
            <Card.Header>About</Card.Header>
            <Card.Body>
              <h3>PuzzTool</h3>
              Version: {version}<br />
              <a
                href="https://github.com/puzztool/puzztool/"
                rel="noopener noreferrer"
                target="_blank"
              >
                Project page
              </a>
            </Card.Body>
          </Card>
        </CardDeck>
      </div>
    </div>
  );
}

export default Settings;
