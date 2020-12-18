import ReactDOM from 'react-dom';
import Settings from '.';

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<Settings />, div);
});
