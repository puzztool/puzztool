import React, { Component } from 'react';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import { HashRouter as Router, Route } from 'react-router-dom';
import { LinkContainer } from 'react-router-bootstrap';
import Loadable from 'react-loadable';
import { RouteData } from './Data/RouteData';
import Loading from './Views/Loading';

const defaultTimeout = 10000;

const WordSearch = Loadable({
  loader: () => import('./Views/Solvers/WordSearch'),
  loading: Loading,
  timeout: defaultTimeout,
});

const AutoConvert = Loadable({
  loader: () => import('./Views/Encoding/AutoConvert'),
  loading: Loading,
  timeout: defaultTimeout,
});

const Autokey = Loadable({
  loader: () => import('./Views/Cipher/Autokey'),
  loading: Loading,
  timeout: defaultTimeout,
});

const Braille = Loadable({
  loader: () => import('./Views/Encoding/Braille'),
  loading: Loading,
  timeout: defaultTimeout,
});

const Caesar = Loadable({
  loader: () => import('./Views/Cipher/Caesar'),
  loading: Loading,
  timeout: defaultTimeout,
});

const CharacterEncodings = Loadable({
  loader: () => import('./Views/Reference/CharacterEncodings'),
  loading: Loading,
  timeout: defaultTimeout,
});

const Home = Loadable({
  loader: () => import('./Views/Home'),
  loading: Loading,
  timeout: defaultTimeout,
});

const Morse = Loadable({
  loader: () => import('./Views/Encoding/Morse'),
  loading: Loading,
  timeout: defaultTimeout,
});

const NatoAlphabet = Loadable({
  loader: () => import('./Views/Reference/Nato'),
  loading: Loading,
  timeout: defaultTimeout,
});

const NavalFlags = Loadable({
  loader: () => import('./Views/Reference/NavalFlagTable'),
  loading: Loading,
  timeout: defaultTimeout,
});

const PigpenReference = Loadable({
  loader: () => import('./Views/Reference/PigpenReference'),
  loading: Loading,
  timeout: defaultTimeout,
});

const Resistors = Loadable({
  loader: () => import('./Views/Reference/Resistors'),
  loading: Loading,
  timeout: defaultTimeout,
});

const Semaphore = Loadable({
  loader: () => import('./Views/Encoding/Semaphore'),
  loading: Loading,
  timeout: defaultTimeout,
});

const Settings = Loadable({
  loader: () => import('./Views/Settings'),
  loading: Loading,
  timeout: defaultTimeout,
});

const Vigenere = Loadable({
  loader: () => import('./Views/Cipher/Vigenere'),
  loading: Loading,
  timeout: defaultTimeout,
});

class App extends Component {
  public render() {
    return (
      <Router>
        <div className="App">
          {this.renderNavbar()}
          <div className="App-content">
            <Route exact={true} path="/" component={Home} />
            <Route path="/cipher/autokey" component={Autokey} />
            <Route path="/cipher/caesar" component={Caesar} />
            <Route path="/cipher/vigenere" component={Vigenere} />
            <Route path="/encoding/autoconvert" component={AutoConvert} />
            <Route path="/encoding/braille" component={Braille} />
            <Route path="/encoding/morse" component={Morse} />
            <Route path="/encoding/pigpen" component={PigpenReference} />
            <Route path="/encoding/semaphore" component={Semaphore} />
            <Route path="/help/settings" component={Settings} />
            <Route path="/reference/characterencodings" component={CharacterEncodings} />
            <Route path="/reference/nato" component={NatoAlphabet} />
            <Route path="/reference/navalflags" component={NavalFlags} />
            <Route path="/reference/resistors" component={Resistors} />
            <Route path="/solvers/wordsearch" component={WordSearch} />
          </div>
        </div>
      </Router>
    );
  }

  private getCategoryDropdownId(categoryName: string) {
    return categoryName.toLowerCase().replace(/[^a-z]/, '').concat('-dropdown');
  }

  private renderNavbarCategories() {
    return RouteData.getCategories().map((category) => (
      <LinkContainer
        key={category.name}
        onClick={(e) => e.preventDefault()}
        to={category.rootUrl}
      >
        <NavDropdown
          id={this.getCategoryDropdownId(category.name)}
          title={category.name}
        >
          {category.children.map((child) => (
            <LinkContainer
              key={`${category.name}-${child.name}`}
              to={category.rootUrl + child.url}
            >
              <NavDropdown.Item eventKey={category.name + child.name}>
                {child.name}
              </NavDropdown.Item>
            </LinkContainer>
          ))}
        </NavDropdown>
      </LinkContainer>
    ));
  }

  private renderNavbar() {
    return (
      <Navbar
        bg="dark"
        collapseOnSelect={true}
        variant="dark"
        // Remove focus from the selected element to prevent it from taking
        // further keyboard input.
        onSelect={() => (document.activeElement as HTMLElement).blur()}
        sticky="top"
      >
        <LinkContainer to="/">
          <Navbar.Brand>PuzzTool</Navbar.Brand>
        </LinkContainer>
        <Navbar.Toggle />
        <Navbar.Collapse>
          <Nav>
            {this.renderNavbarCategories()}
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
}

export default App;
