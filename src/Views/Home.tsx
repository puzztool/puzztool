import * as React from 'react';
import { RouteComponentProps } from 'react-router';
import { Link } from 'react-router-dom';
import './Home.css';

class Home extends React.Component<RouteComponentProps<void>> {
  public render() {
    return (
      <div>
        <div className="Home-content">
          <ul>
            <li><Link to="/braille">Braille</Link></li>
            <li><Link to="/morse">Morse</Link></li>
          </ul>
        </div>
      </div>
    );
  }
}

export default Home;
