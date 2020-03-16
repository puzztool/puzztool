import React from 'react';
import { Route, Switch } from 'react-router-dom';
import Loadable from 'react-loadable';
import AppNav from './Features/AppNav';
import NotFound from './Features/Error/NotFound';
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

const Character = Loadable({
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

const NavalFlag = Loadable({
  loader: () => import('./Features/Encoding/NavalFlag'),
  loading: Loading,
  timeout: defaultTimeout,
});

const Pigpen = Loadable({
  loader: () => import('./Features/Pigpen'),
  loading: Loading,
  timeout: defaultTimeout,
});

const Resistor = Loadable({
  loader: () => import('./Features/Resistor'),
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
    <div className="App">
      <AppNav />
      <div className="App-content">
        <Switch>
          <Route exact={true} path="/" component={Home} />
          <Route exact={true} path="/cipher/autokey" component={Autokey} />
          <Route exact={true} path="/cipher/caesar" component={Caesar} />
          <Route exact={true} path="/cipher/vigenere" component={Vigenere} />
          <Route exact={true} path="/encoding/autoconvert" component={AutoConvert} />
          <Route exact={true} path="/encoding/braille" component={Braille} />
          <Route exact={true} path="/encoding/morse" component={Morse} />
          <Route exact={true} path="/encoding/pigpen" component={Pigpen} />
          <Route exact={true} path="/encoding/semaphore" component={Semaphore} />
          <Route exact={true} path="/help/settings" component={Settings} />
          <Route exact={true} path="/reference/characterencodings" component={Character} />
          <Route exact={true} path="/reference/nato" component={Nato} />
          <Route exact={true} path="/reference/navalflags" component={NavalFlag} />
          <Route exact={true} path="/reference/resistors" component={Resistor} />
          <Route exact={true} path="/solvers/wordsearch" component={WordSearch} />
          <Route component={NotFound} />
        </Switch>
      </div>
    </div>
  );
}

export default App;
