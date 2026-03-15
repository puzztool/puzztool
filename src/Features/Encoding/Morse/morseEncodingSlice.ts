import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface State {
  selectedTab?: string;
  stream: string;
}

const initialState: State = {
  stream: "",
};

const morseEncodingSlice = createSlice({
  name: "morseEncoding",
  initialState,
  reducers: {
    append(state, action: PayloadAction<string>) {
      state.stream += action.payload;
    },
    backspace(state) {
      state.stream = state.stream.slice(0, -1);
    },
    clear(state) {
      Object.assign(state, initialState);
    },
    selectTab(state, action: PayloadAction<string | null>) {
      state.selectedTab = action.payload ?? undefined;
    },
    setStream(state, action: PayloadAction<string>) {
      state.stream = action.payload;
    },
  },
});

export const { append, backspace, clear, selectTab, setStream } =
  morseEncodingSlice.actions;

export default morseEncodingSlice.reducer;
