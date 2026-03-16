import { PigpenEncoding } from "puzzle-lib/pigpen";
import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface State {
  encoding: PigpenEncoding;
  selectedTab?: string;
  stream: PigpenEncoding[];
}

const initialState: State = {
  encoding: PigpenEncoding.None,
  stream: [],
};

const pigpenEncodingSlice = createSlice({
  name: "pigpenEncoding",
  initialState,
  reducers: {
    append(state, action: PayloadAction<PigpenEncoding>) {
      state.encoding = PigpenEncoding.None;
      state.stream.push(action.payload);
    },
    backspace(state) {
      state.stream.pop();
    },
    clear(state) {
      Object.assign(state, initialState);
    },
    selectTab(state, action: PayloadAction<string | null>) {
      state.selectedTab = action.payload ?? undefined;
    },
    setEncoding(state, action: PayloadAction<PigpenEncoding>) {
      state.encoding = action.payload;
    },
    space(state) {
      state.stream.push(PigpenEncoding.None);
    },
  },
});

export const { append, backspace, clear, selectTab, setEncoding, space } =
  pigpenEncodingSlice.actions;

export default pigpenEncodingSlice.reducer;
