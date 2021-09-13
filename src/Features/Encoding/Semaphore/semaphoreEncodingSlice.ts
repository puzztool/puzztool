import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { SemaphoreDirection } from "puzzle-lib";

interface State {
  directions: SemaphoreDirection[];
  selectedTab?: string;
  stream: string;
}

const initialState: State = {
  directions: [],
  stream: "",
};

const semaphoreEncodingSlice = createSlice({
  name: "semaphoreEncoding",
  initialState,
  reducers: {
    append(state, action: PayloadAction<string>) {
      state.directions.length = 0;
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
    setDirections(state, action: PayloadAction<SemaphoreDirection[]>) {
      state.directions = action.payload;
    },
    space(state) {
      state.stream += " ";
    },
  },
});

export const { append, backspace, clear, selectTab, setDirections, space } =
  semaphoreEncodingSlice.actions;

export default semaphoreEncodingSlice.reducer;
