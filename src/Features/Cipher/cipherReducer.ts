import { combineReducers } from 'redux';
import autokeyCipherReducer from './Autokey/autokeyCipherSlice';
import caesarCipherReducer from './Caesar/caesarCipherSlice';
import vigenereCipherReducer from './Vigenere/vigenereCipherSlice';

export default combineReducers({
  autokey: autokeyCipherReducer,
  caesar: caesarCipherReducer,
  vigenere: vigenereCipherReducer,
});
