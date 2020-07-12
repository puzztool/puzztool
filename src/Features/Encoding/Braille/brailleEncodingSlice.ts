import { BrailleEncoding } from 'puzzle-lib';
import { createSlice, PayloadAction } from '@reduxjs/toolkit';

interface State {
  encoding: BrailleEncoding,
  selectedTab: string | null;
  stream: BrailleEncoding[];
}

const initialState: State = {
  encoding: BrailleEncoding.None,
  selectedTab: null,
  stream: [],
};

const brailleEncodingSlice = createSlice({
  name: 'brailleEncoding',
  initialState,
  reducers: {
    append(state, action: PayloadAction<BrailleEncoding>) {
      state.encoding = BrailleEncoding.None;
      state.stream.push(action.payload);
    },
    backspace(state) {
      state.stream.pop();
    },
    clear(state) {
      state = initialState;
    },
    selectTab(state, action: PayloadAction<string | null>) {
      state.selectedTab = action.payload;
    },
    setEncoding(state, action: PayloadAction<BrailleEncoding>) {
      state.encoding = action.payload;
    },
    space(state) {
      state.stream.push(BrailleEncoding.None);
    },
  }
});

export const {
  append,
  backspace,
  clear,
  selectTab,
  setEncoding,
  space,
} = brailleEncodingSlice.actions;

export default brailleEncodingSlice.reducer;
