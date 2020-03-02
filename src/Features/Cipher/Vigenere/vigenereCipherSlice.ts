import { createSlice, PayloadAction } from '@reduxjs/toolkit';

export interface State {
  conversion: number;
  secret: string;
  text: string;
}

const initialState: State = {
  conversion: 2,
  secret: '',
  text: '',
};

const vigenereCipherSlice = createSlice({
  name: 'vigenereCipher',
  initialState,
  reducers: {
    clear(state) {
      state.conversion = 2;
      state.secret = '';
      state.text = '';
    },
    setConversion(state, action: PayloadAction<number>) {
      state.conversion = action.payload;
    },
    setSecret(state, action: PayloadAction<string>) {
      state.secret = action.payload;
    },
    setText(state, action: PayloadAction<string>) {
      state.text = action.payload;
    },
  }
});

export const {
  clear,
  setConversion,
  setSecret,
  setText,
} = vigenereCipherSlice.actions;

export default vigenereCipherSlice.reducer;
