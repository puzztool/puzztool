import ReactDOM from 'react-dom';
import Nato from '.';

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<Nato />, div);
});
