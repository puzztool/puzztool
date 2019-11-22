import React from 'react';
import { HashRouter as Router, Route } from 'react-router-dom';
import Loadable from 'react-loadable';
import AppNav from './Nav/AppNav';
import Loading from './Views/Loading';
import './App.scss';

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
  loader: () => import('./Views/Reference/NatoTable'),
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

export default App;
