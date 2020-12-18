import ReactDOM from 'react-dom';
import PuzzToolDocumentTitle from './PuzzToolDocumentTitle';

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<PuzzToolDocumentTitle />, div);
});
