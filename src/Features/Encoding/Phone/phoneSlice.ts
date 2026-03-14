import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface State {
  digits: string;
}

const initialState: State = {
  digits: "",
};

const phoneSlice = createSlice({
  name: "phone",
  initialState,
  reducers: {
    setDigits(state, action: PayloadAction<string>) {
      state.digits = action.payload;
    },
    clear(state) {
      Object.assign(state, initialState);
    },
  },
});

export const { setDigits, clear } = phoneSlice.actions;

export default phoneSlice.reducer;
