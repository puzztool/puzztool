import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface State {
  selectedTab?: string;
}

const initialState: State = {};

const characterEncodingSlice = createSlice({
  name: "characterEncoding",
  initialState,
  reducers: {
    selectTab(state, action: PayloadAction<string | null>) {
      state.selectedTab = action.payload ?? undefined;
    },
  },
});

export const { selectTab } = characterEncodingSlice.actions;

export default characterEncodingSlice.reducer;
