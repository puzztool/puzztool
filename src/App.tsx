import * as React from 'react';
import { MenuItem, Nav, Navbar, NavDropdown } from 'react-bootstrap';
import { HashRouter as Router, Route } from 'react-router-dom';
import { LinkContainer } from 'react-router-bootstrap';
import * as Loadable from 'react-loadable';
import Loading from './Views/Loading';
import './App.css';

const defaultTimeout = 10000;

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

class App extends React.Component {
  public render() {
    return (
      <Router>
        <div className="App">
          <Navbar
            inverse={true}
            staticTop={true}
            fluid={true}
            collapseOnSelect={true}
            // Remove focus from the selected element to prevent it from taking
            // further keyboard input.
            onSelect={() => (document.activeElement as HTMLElement).blur()}
          >
            <Navbar.Header>
              <Navbar.Brand>
                <a href="#/">PuzzTool</a>
              </Navbar.Brand>
              <Navbar.Toggle />
            </Navbar.Header>
            <Navbar.Collapse>
              <Nav>
                <LinkContainer to="/cipher" onClick={(e) => e.preventDefault()}>
                  <NavDropdown eventKey={1} title="Ciphers" id="cipher-dropdown">
                  <LinkContainer to="/cipher/autokey">
                      <MenuItem eventKey={1.1}>Autokey Cipher</MenuItem>
                    </LinkContainer>
                    <LinkContainer to="/cipher/caesar">
                      <MenuItem eventKey={1.2}>Caesar Cipher</MenuItem>
                    </LinkContainer>
                    <LinkContainer to="/cipher/vigenere">
                      <MenuItem eventKey={1.3}>Vigenere Cipher</MenuItem>
                    </LinkContainer>
                  </NavDropdown>
                </LinkContainer>
                <LinkContainer to="/encoding" onClick={(e) => e.preventDefault()}>
                  <NavDropdown eventKey={2} title="Encodings" id="conversion-dropdown">
                    <LinkContainer to="/encoding/autoconvert">
                      <MenuItem eventKey={2.1}>AutoConvert</MenuItem>
                    </LinkContainer>
                    <LinkContainer to="/encoding/braille">
                      <MenuItem eventKey={2.2}>Braille</MenuItem>
                    </LinkContainer>
                    <LinkContainer to="/encoding/morse">
                      <MenuItem eventKey={2.3}>Morse</MenuItem>
                    </LinkContainer>
                    <LinkContainer to="/encoding/semaphore">
                      <MenuItem eventKey={2.4}>Semaphore</MenuItem>
                    </LinkContainer>
                  </NavDropdown>
                </LinkContainer>
                <LinkContainer to="/reference" onClick={(e) => e.preventDefault()}>
                  <NavDropdown eventKey={3} title="Reference" id="reference-dropdown">
                    <LinkContainer to="/reference/characterencodings">
                      <MenuItem eventKey={3.1}>Character Encodings</MenuItem>
                    </LinkContainer>
                    <LinkContainer to="/reference/nato">
                      <MenuItem eventKey={3.2}>NATO Alphabet</MenuItem>
                    </LinkContainer>
                    <LinkContainer to="/reference/navalflags">
                      <MenuItem eventKey={3.3}>Naval Flags</MenuItem>
                    </LinkContainer>
                    <LinkContainer to="/reference/resistors">
                      <MenuItem eventKey={3.4}>Resistors</MenuItem>
                    </LinkContainer>
                  </NavDropdown>
                </LinkContainer>
              </Nav>
              <Nav pullRight={true}>
                <LinkContainer to="/help" onClick={(e) => e.preventDefault()}>
                  <NavDropdown eventKey={4} title="Help" id="help-dropdown">
                    <LinkContainer to="/help/settings">
                      <MenuItem eventKey={4.1}>Settings</MenuItem>
                    </LinkContainer>
                    <MenuItem href="https://github.com/beckbria/puzztool/issues/new" target="_blank">
                      Feedback
                    </MenuItem>
                  </NavDropdown>
                </LinkContainer>
              </Nav>
            </Navbar.Collapse>
          </Navbar>
          <div className="App-content">
            <Route exact={true} path="/" component={Home} />
            <Route path="/encoding/braille" component={Braille} />
            <Route path="/cipher/autokey" component={Autokey} />
            <Route path="/cipher/caesar" component={Caesar} />
            <Route path="/cipher/vigenere" component={Vigenere} />
            <Route path="/encoding/autoconvert" component={AutoConvert} />
            <Route path="/encoding/morse" component={Morse} />
            <Route path="/encoding/semaphore" component={Semaphore} />
            <Route path="/help/settings" component={Settings} />
            <Route path="/reference/characterencodings" component={CharacterEncodings} />
            <Route path="/reference/nato" component={NatoAlphabet} />
            <Route path="/reference/navalflags" component={NavalFlags} />
            <Route path="/reference/resistors" component={Resistors} />
          </div>
        </div>
      </Router>
    );
  }
}

export default App;
