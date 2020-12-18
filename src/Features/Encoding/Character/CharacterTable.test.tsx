import ReactDOM from 'react-dom';
import CharacterTable from './CharacterTable';

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<CharacterTable data={[]} />, div);
});
