import ReactDOM from 'react-dom';
import { SemaphoreCharacter as Character } from 'puzzle-lib';
import SemaphorePicture from './SemaphorePicture';

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(
    <SemaphorePicture character={new Character()} width={100} />,
    div);
});
