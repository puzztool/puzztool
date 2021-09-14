import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface State {
  canBend: boolean;
  grid: string;
  useCardinals: boolean;
  useDiagonals: boolean;
  wordList: string;
}

const initialState: State = {
  canBend: false,
  grid: "",
  useCardinals: true,
  useDiagonals: true,
  wordList: "",
};

const wordSearchSlice = createSlice({
  name: "wordSearch",
  initialState,
  reducers: {
    setCanBend(state, action: PayloadAction<boolean>) {
      state.canBend = action.payload;
    },
    setGrid(state, action: PayloadAction<string>) {
      state.grid = action.payload;
    },
    setUseCardinals(state, action: PayloadAction<boolean>) {
      state.useCardinals = action.payload;
    },
    setUseDiagonals(state, action: PayloadAction<boolean>) {
      state.useDiagonals = action.payload;
    },
    setWordList(state, action: PayloadAction<string>) {
      state.wordList = action.payload;
    },
  },
});

export const {
  setCanBend,
  setGrid,
  setUseCardinals,
  setUseDiagonals,
  setWordList,
} = wordSearchSlice.actions;

export default wordSearchSlice.reducer;
