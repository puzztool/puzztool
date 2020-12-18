import ReactDOM from 'react-dom';
import {
    SemaphoreCharacter as Character,
    SemaphoreDirection as Direction,
} from 'puzzle-lib';
import SemaphoreCheckbox from './SemaphoreCheckbox';

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(
    <SemaphoreCheckbox character={new Character()} direction={Direction.None} />,
    div);
});
