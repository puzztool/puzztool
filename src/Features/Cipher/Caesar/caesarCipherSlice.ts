import { createSlice, PayloadAction } from '@reduxjs/toolkit';

export interface State {
  text: string;
}

const initialState: State = {
  text: '',
};

const caesarCipherSlice = createSlice({
  name: 'caesarCipher',
  initialState,
  reducers: {
    clear(state) {
      state.text = '';
    },
    setText(state, action: PayloadAction<string>) {
      state.text = action.payload;
    },
  }
});

export const {
  clear,
  setText,
} = caesarCipherSlice.actions;

export default caesarCipherSlice.reducer;
