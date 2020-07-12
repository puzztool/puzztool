import { createSlice, PayloadAction } from '@reduxjs/toolkit';

interface State {
  selectedTab: string | null;
  stream: string;
}

const initialState: State = {
  selectedTab: null,
  stream: '',
};

const morseEncodingSlice = createSlice({
  name: 'morseEncoding',
  initialState,
  reducers: {
    append(state, action: PayloadAction<string>) {
      state.stream += action.payload;
    },
    backspace(state) {
      state.stream = state.stream.slice(0, -1);
    },
    clear(state) {
      state = initialState;
    },
    selectTab(state, action: PayloadAction<string | null>) {
      state.selectedTab = action.payload;
    },
  }
});

export const {
  append,
  backspace,
  clear,
  selectTab,
} = morseEncodingSlice.actions;

export default morseEncodingSlice.reducer;
