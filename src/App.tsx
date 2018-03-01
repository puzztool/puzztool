import * as React from 'react';
import { HashRouter as Router, Route } from 'react-router-dom';
import Braille from 'Views/Braille';
import Home from 'Views/Home';
import Morse from 'Views/Morse';
import './App.css';

class App extends React.Component {
  public render() {
    return (
      <Router>
        <div className="App">
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
