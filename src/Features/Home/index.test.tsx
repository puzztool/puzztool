import ReactDOM from 'react-dom';
import Home from '.';
import { HashRouter as Router } from 'react-router-dom';

it('renders without crashing', () => {
  const div = document.createElement('div');
  const element = (
    <Router>
      <Home />
    </Router>
  );

  ReactDOM.render(element, div);
});
