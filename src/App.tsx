import * as React from 'react';
import { MenuItem, Nav, Navbar, NavDropdown, NavItem } from 'react-bootstrap';
import { HashRouter as Router, Route } from 'react-router-dom';
import { LinkContainer } from 'react-router-bootstrap';
import * as Loadable from 'react-loadable';
import Loading from 'Views/Loading';
import './App.css';

const defaultTimeout = 10000;

const Braille = Loadable({
  loader: () => import('Views/Braille'),
  loading: Loading,
  timeout: defaultTimeout,
});

const Caesar = Loadable({
  loader: () => import('Views/Cipher/Caesar'),
  loading: Loading,
  timeout: defaultTimeout,
});

const CharacterEncodings = Loadable({
  loader: () => import('Views/Reference/CharacterEncodings'),
  loading: Loading,
  timeout: defaultTimeout,
});

const Home = Loadable({
  loader: () => import('Views/Home'),
  loading: Loading,
  timeout: defaultTimeout,
});

const Morse = Loadable({
  loader: () => import('Views/Morse'),
  loading: Loading,
  timeout: defaultTimeout,
});

const Settings = Loadable({
  loader: () => import('Views/Settings'),
  loading: Loading,
  timeout: defaultTimeout,
});

const Vigenere = Loadable({
  loader: () => import('Views/Cipher/Vigenere'),
  loading: Loading,
  timeout: defaultTimeout,
});

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
