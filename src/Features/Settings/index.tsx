import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import Col from "react-bootstrap/Col";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import PuzzToolPage from "../../Common/PuzzToolPage";
import { clearLocalStorage } from "../../Data/LocalStorage";
import PuzztoolBannerDark from "../../Images/puzztool_banner_dark.svg";
import { version } from "../../version";
import "./index.scss";

function Settings() {
  function onClearClick() {
    clearLocalStorage();
  }

  return (
    <PuzzToolPage title="Settings">
      <div className="Settings">
        <Container fluid={true}>
          <Row className="gy-3">
            <Col md={true}>
              <Card className="h-100">
                <Card.Header>Saved state</Card.Header>
                <Card.Body>
                  <p>
                    The most recent inputs to each tool are stored in the
                    browser's local storage. In the event that state becomes
                    corrupted it can be cleared using the button below.
                  </p>
                  <Button onClick={onClearClick} variant="danger">
                    Clear saved state
                  </Button>
                </Card.Body>
              </Card>
            </Col>
            <Col md={true}>
              <Card className="h-100">
                <Card.Header>About</Card.Header>
                <Card.Body>
                  <img
                    className="AboutLogo"
                    src={PuzztoolBannerDark}
                    alt="PuzzTool logo"
                  />
                  Version: {version}
                  <br />
                  <a
                    href="https://github.com/puzztool/puzztool/"
                    rel="noreferrer"
                    target="_blank"
                  >
                    Project page
                  </a>
                </Card.Body>
              </Card>
            </Col>
          </Row>
        </Container>
      </div>
    </PuzzToolPage>
  );
}

export default Settings;
