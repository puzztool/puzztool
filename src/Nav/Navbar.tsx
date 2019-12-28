import React from 'react';
import Nav from 'react-bootstrap/Nav';
import ReactNavbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import { LinkContainer } from 'react-router-bootstrap';
import { getCategories } from '../Data/RouteData';
import NavbarCategory from './NavbarCategory';
import './Navbar.scss';

function Navbar() {
  return (
    <ReactNavbar
      bg="dark"
      collapseOnSelect={true}
      expand="md"
      // Remove focus from the selected element to prevent it from taking
      // further keyboard input.
      onSelect={() => (document.activeElement as HTMLElement).blur()}
      sticky="top"
      variant="dark"
    >
      <LinkContainer to="/">
        <ReactNavbar.Brand>
          <div className="NavbarLogo">
            <img
              className="NavbarLogo-img"
              src={require('../Images/puzztool_banner_white.svg')}
              alt="PuzzTool logo"
            />
          </div>
        </ReactNavbar.Brand>
      </LinkContainer>
      <ReactNavbar.Toggle />
      <ReactNavbar.Collapse>
        <Nav>
          {getCategories().map(
            category => <NavbarCategory key={category.name} category={category} />)}
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
      </ReactNavbar.Collapse>
    </ReactNavbar>
  );
}

export default Navbar;
