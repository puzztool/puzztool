import * as React from 'react';
import { Nav, Navbar, NavItem } from 'react-bootstrap';
import { HashRouter as Router, Route } from 'react-router-dom';
import { LinkContainer } from 'react-router-bootstrap';
import Braille from 'Views/Braille';
import Home from 'Views/Home';
import Morse from 'Views/Morse';
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
                <LinkContainer to="/morse">
                  <NavItem eventKey={2}>Morse</NavItem>
                </LinkContainer>
              </Nav>
            </Navbar.Collapse>
          </Navbar>
          <div className="App-content">
            <Route exact={true} path="/" component={Home} />
            <Route path="/braille" component={Braille} />
            <Route path="/morse" component={Morse} />
          </div>
        </div>
      </Router>
    );
  }
}

export default App;
