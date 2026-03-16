import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface State {
  digits: string;
  letters: string;
  selectedTab?: string;
}

const initialState: State = {
  digits: "",
  letters: "",
};

const phoneSlice = createSlice({
  name: "phone",
  initialState,
  reducers: {
    setDigits(state, action: PayloadAction<string>) {
      state.digits = action.payload;
    },
    setLetters(state, action: PayloadAction<string>) {
      state.letters = action.payload;
    },
    selectTab(state, action: PayloadAction<string | null>) {
      state.selectedTab = action.payload ?? undefined;
    },
    clearDigits(state) {
      state.digits = "";
    },
    clearLetters(state) {
      state.letters = "";
    },
  },
});

export const { setDigits, setLetters, selectTab, clearDigits, clearLetters } =
  phoneSlice.actions;

export default phoneSlice.reducer;
