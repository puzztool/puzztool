import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { SemaphoreEncoding } from "puzzle-lib";

interface State {
  encoding: SemaphoreEncoding;
  selectedTab?: string;
  stream: string;
}

const initialState: State = {
  encoding: SemaphoreEncoding.None,
  stream: "",
};

const semaphoreEncodingSlice = createSlice({
  name: "semaphoreEncoding",
  initialState,
  reducers: {
    append(state, action: PayloadAction<string>) {
      state.encoding = SemaphoreEncoding.None;
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
    setEncoding(state, action: PayloadAction<SemaphoreEncoding>) {
      state.encoding = action.payload;
    },
    space(state) {
      state.stream += " ";
    },
  },
});

export const { append, backspace, clear, selectTab, setEncoding, space } =
  semaphoreEncodingSlice.actions;

export default semaphoreEncodingSlice.reducer;
