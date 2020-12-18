import ReactDOM from 'react-dom';
import SemaphoreReference from './SemaphoreReference';

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<SemaphoreReference />, div);
});
