import * as React from 'react';
import { MenuItem, Nav, Navbar, NavDropdown, NavItem } from 'react-bootstrap';
import { HashRouter as Router, Route } from 'react-router-dom';
import { LinkContainer } from 'react-router-bootstrap';
import Braille from 'Views/Braille';
import Caesar from 'Views/Cipher/Caesar';
import CharacterEncodings from 'Views/Reference/CharacterEncodings';
import Home from 'Views/Home';
import Morse from 'Views/Morse';
import Settings from 'Views/Settings';
import Vigenere from 'Views/Cipher/Vigenere';
import './App.css';

class App extends React.Component {
  public render() {
    return (
      <Router>
        <div className="App">
          <Navbar inverse={true} staticTop={true} fluid={true} collapseOnSelect={true}>
            <Navbar.Header>
              <Navbar.Brand>
                <a href="#/">Puzzle Tools</a>
              </Navbar.Brand>
              <Navbar.Toggle />
            </Navbar.Header>
            <Navbar.Collapse>
              <Nav>
                <LinkContainer to="/braille">
                  <NavItem eventKey={1}>Braille</NavItem>
                </LinkContainer>
                <LinkContainer to="/cipher" onClick={(e) => e.preventDefault()}>
                  <NavDropdown eventKey={2} title="Cipher" id="cipher-dropdown">
                    <LinkContainer to="/cipher/caesar">
                      <MenuItem eventKey={2.1}>Caesar Cipher</MenuItem>
                    </LinkContainer>
                    <LinkContainer to="/cipher/vigenere">
                      <MenuItem eventKey={2.2}>Vigenere Cipher</MenuItem>
                    </LinkContainer>
                  </NavDropdown>
                </LinkContainer>
                <LinkContainer to="/morse">
                  <NavItem eventKey={3}>Morse</NavItem>
                </LinkContainer>
                <LinkContainer to="/reference" onClick={(e) => e.preventDefault()}>
                  <NavDropdown eventKey={4} title="Reference" id="conversion-dropdown">
                    <LinkContainer to="/reference/characterencodings">
                      <MenuItem eventKey={4.1}>Character Encodings</MenuItem>
                    </LinkContainer>
                  </NavDropdown>
                </LinkContainer>
              </Nav>
              <Nav pullRight={true}>
                <LinkContainer to="/settings">
                  <NavItem eventKey={5}>Settings</NavItem>
                </LinkContainer>
              </Nav>
            </Navbar.Collapse>
          </Navbar>
          <div className="App-content">
            <Route exact={true} path="/" component={Home} />
            <Route path="/braille" component={Braille} />
            <Route path="/cipher/caesar" component={Caesar} />
            <Route path="/cipher/vigenere" component={Vigenere} />
            <Route path="/morse" component={Morse} />
            <Route path="/reference/characterencodings" component={CharacterEncodings} />
            <Route path="/settings" component={Settings} />
          </div>
        </div>
      </Router>
    );
  }
}

export default App;
