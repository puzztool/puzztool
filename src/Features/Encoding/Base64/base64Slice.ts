import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface State {
  text: string;
}

const initialState: State = {
  text: "",
};

const base64Slice = createSlice({
  name: "base64",
  initialState,
  reducers: {
    clear(state) {
      Object.assign(state, initialState);
    },
    setText(state, action: PayloadAction<string>) {
      state.text = action.payload;
    },
  },
});

export const { clear, setText } = base64Slice.actions;

export default base64Slice.reducer;
