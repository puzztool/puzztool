import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { Conversion } from "../KeyedCipherStream";

interface State {
  conversion: Conversion;
  secret: string;
  text: string;
}

const initialState: State = {
  conversion: Conversion.decrypt,
  secret: "",
  text: "",
};

const vigenereCipherSlice = createSlice({
  name: "vigenereCipher",
  initialState,
  reducers: {
    clear(state) {
      Object.assign(state, initialState);
    },
    setConversion(state, action: PayloadAction<Conversion>) {
      state.conversion = action.payload;
    },
    setSecret(state, action: PayloadAction<string>) {
      state.secret = action.payload;
    },
    setText(state, action: PayloadAction<string>) {
      state.text = action.payload;
    },
  },
});

export const { clear, setConversion, setSecret, setText } =
  vigenereCipherSlice.actions;

export default vigenereCipherSlice.reducer;
