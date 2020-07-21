import React from 'react';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import CardDeck from 'react-bootstrap/CardDeck';
import PuzzToolPage from '../../Common/PuzzToolPage';
import { clearLocalStorage } from '../../Data/LocalStorage';
import PuzztoolBannerDark from '../../Images/puzztool_banner_dark.svg';
import { version } from '../../version';
import './index.scss';

function Settings() {
  function onClearClick() {
    clearLocalStorage();
  }

  return (
    <PuzzToolPage title="Settings">
      <div className="Settings">
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
              <img
                className="AboutLogo"
                src={PuzztoolBannerDark}
                alt="PuzzTool logo"
              />
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
    </PuzzToolPage>
  );
}

export default Settings;
