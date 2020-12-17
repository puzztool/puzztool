import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import { LinkContainer } from 'react-router-bootstrap';
import { getCategories } from '../../Data/RouteData';
import PuzztoolBannerWhite from '../../Images/puzztool_banner_white.svg';
import AppNavCategory from './AppNavCategory';
import './index.scss';

function AppNav() {
  return (
    <Navbar
      bg="dark"
      className="AppNav"
      collapseOnSelect={true}
      expand="md"
      // Remove focus from the selected element to prevent it from taking
      // further keyboard input.
      onSelect={() => (document.activeElement as HTMLElement).blur()}
      sticky="top"
      variant="dark"
    >
      <LinkContainer to="/">
        <Navbar.Brand>
          <img
            className="NavbarLogo"
            src={PuzztoolBannerWhite}
            alt="PuzzTool logo"
          />
        </Navbar.Brand>
      </LinkContainer>
      <Navbar.Toggle />
      <Navbar.Collapse>
        <Nav>
          {getCategories().map(
            category => <AppNavCategory key={category.name} category={category} />)}
        </Nav>
        <Nav>
          <LinkContainer to="/help" onClick={(e) => e.preventDefault()}>
            <NavDropdown title="Help" id="help-dropdown">
              <LinkContainer to="/help/settings">
                <NavDropdown.Item eventKey="Help.Settings">Settings</NavDropdown.Item>
              </LinkContainer>
            </NavDropdown>
          </LinkContainer>
          <Nav.Link
            eventKey="Help.Feedback"
            href="https://github.com/puzztool/puzztool/issues/new"
            target="_blank"
          >
            Feedback
          </Nav.Link>
        </Nav>
      </Navbar.Collapse>
    </Navbar>
  );
}

export default AppNav;
