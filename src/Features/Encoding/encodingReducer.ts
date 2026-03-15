import { combineReducers } from "redux";
import autoConvertReducer from "./AutoConvert/autoConvertSlice";
import brailleEncodingReducer from "./Braille/brailleEncodingSlice";
import characterEncodingReducer from "./Character/characterEncodingSlice";
import morseEncodingReducer from "./Morse/morseEncodingSlice";
import phoneReducer from "./Phone/phoneSlice";
import semaphoreEncodingReducer from "./Semaphore/semaphoreEncodingSlice";

export default combineReducers({
  autoConvert: autoConvertReducer,
  braille: brailleEncodingReducer,
  character: characterEncodingReducer,
  morse: morseEncodingReducer,
  phone: phoneReducer,
  semaphore: semaphoreEncodingReducer,
});
