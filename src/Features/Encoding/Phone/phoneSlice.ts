import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface State {
  digits: string;
  letters: string;
  selectedTab: string | null;
}

const initialState: State = {
  digits: "",
  letters: "",
  selectedTab: null,
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
      state.selectedTab = action.payload;
    },
    clear(state) {
      const tab = state.selectedTab;
      Object.assign(state, initialState);
      state.selectedTab = tab;
    },
  },
});

export const { setDigits, setLetters, selectTab, clear } = phoneSlice.actions;

export default phoneSlice.reducer;
