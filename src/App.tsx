import * as React from 'react';
import BrailleStream from './Braille/BrailleStream';
import './App.css';

class App extends React.Component {
  render() {
    return (
      <div className="App">
        <BrailleStream />
      </div>
    );
  }
}

export default App;
