import { combineReducers } from "redux";
import { persistReducer } from "redux-persist";
import storage from "redux-persist/lib/storage";
import cipherReducer from "../Features/Cipher/cipherReducer";
import encodingReducer from "../Features/Encoding/encodingReducer";
import resistorReducer from "../Features/Resistor/resistorSlice";
import wordSearchReducer from "../Features/WordSearch/wordSearchSlice";

const cipherPersistConfig = {
  key: "cipher",
  storage,
};

const encodingPersistConfig = {
  key: "encoding",
  storage,
};

const createRootReducer = () =>
  combineReducers({
    cipher: persistReducer(cipherPersistConfig, cipherReducer),
    encoding: persistReducer(encodingPersistConfig, encodingReducer),
    resistor: resistorReducer,
    wordSearch: wordSearchReducer,
  });

export type RootState = ReturnType<ReturnType<typeof createRootReducer>>;
export default createRootReducer;
