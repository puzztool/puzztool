import React from 'react';
import { HashRouter as Router, Route } from 'react-router-dom';
import Loadable from 'react-loadable';
import AppNav from './Features/AppNav';
import Loading from './Common/Loading';
import './App.scss';

const defaultTimeout = 10000;

const WordSearch = Loadable({
  loader: () => import('./Features/WordSearch'),
  loading: Loading,
  timeout: defaultTimeout,
});

const AutoConvert = Loadable({
  loader: () => import('./Features/Encoding/AutoConvert'),
  loading: Loading,
  timeout: defaultTimeout,
});

const Autokey = Loadable({
  loader: () => import('./Features/Cipher/Autokey'),
  loading: Loading,
  timeout: defaultTimeout,
});

const Braille = Loadable({
  loader: () => import('./Features/Encoding/Braille'),
  loading: Loading,
  timeout: defaultTimeout,
});

const Caesar = Loadable({
  loader: () => import('./Features/Cipher/Caesar'),
  loading: Loading,
  timeout: defaultTimeout,
});

const CharacterEncodings = Loadable({
  loader: () => import('./Features/Encoding/Character'),
  loading: Loading,
  timeout: defaultTimeout,
});

const Home = Loadable({
  loader: () => import('./Features/Home'),
  loading: Loading,
  timeout: defaultTimeout,
});

const Morse = Loadable({
  loader: () => import('./Features/Encoding/Morse'),
  loading: Loading,
  timeout: defaultTimeout,
});

const Nato = Loadable({
  loader: () => import('./Features/Encoding/Nato'),
  loading: Loading,
  timeout: defaultTimeout,
});

const NavalFlags = Loadable({
  loader: () => import('./Features/Encoding/NavalFlags'),
  loading: Loading,
  timeout: defaultTimeout,
});

const Pigpen = Loadable({
  loader: () => import('./Features/Pigpen'),
  loading: Loading,
  timeout: defaultTimeout,
});

const Resistors = Loadable({
  loader: () => import('./Features/Resistors'),
  loading: Loading,
  timeout: defaultTimeout,
});

const Semaphore = Loadable({
  loader: () => import('./Features/Encoding/Semaphore'),
  loading: Loading,
  timeout: defaultTimeout,
});

const Settings = Loadable({
  loader: () => import('./Features/Settings'),
  loading: Loading,
  timeout: defaultTimeout,
});

const Vigenere = Loadable({
  loader: () => import('./Features/Cipher/Vigenere'),
  loading: Loading,
  timeout: defaultTimeout,
});

function App() {
  return (
    <Router>
      <div className="App">
        <AppNav />
        <div className="App-content">
          <Route exact={true} path="/" component={Home} />
          <Route path="/cipher/autokey" component={Autokey} />
          <Route path="/cipher/caesar" component={Caesar} />
          <Route path="/cipher/vigenere" component={Vigenere} />
          <Route path="/encoding/autoconvert" component={AutoConvert} />
          <Route path="/encoding/braille" component={Braille} />
          <Route path="/encoding/morse" component={Morse} />
          <Route path="/encoding/pigpen" component={Pigpen} />
          <Route path="/encoding/semaphore" component={Semaphore} />
          <Route path="/help/settings" component={Settings} />
          <Route path="/reference/characterencodings" component={CharacterEncodings} />
          <Route path="/reference/nato" component={Nato} />
          <Route path="/reference/navalflags" component={NavalFlags} />
          <Route path="/reference/resistors" component={Resistors} />
          <Route path="/solvers/wordsearch" component={WordSearch} />
        </div>
      </div>
    </Router>
  );
}

export default App;
