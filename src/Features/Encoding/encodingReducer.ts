import { combineReducers } from "redux";
import autoConvertReducer from "./AutoConvert/autoConvertSlice";
import base64Reducer from "./Base64/base64Slice";
import brailleEncodingReducer from "./Braille/brailleEncodingSlice";
import characterEncodingReducer from "./Character/characterEncodingSlice";
import morseEncodingReducer from "./Morse/morseEncodingSlice";
import semaphoreEncodingReducer from "./Semaphore/semaphoreEncodingSlice";

export default combineReducers({
  autoConvert: autoConvertReducer,
  base64: base64Reducer,
  braille: brailleEncodingReducer,
  character: characterEncodingReducer,
  morse: morseEncodingReducer,
  semaphore: semaphoreEncodingReducer,
});
