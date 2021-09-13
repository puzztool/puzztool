import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface State {
  bands: number[];
  selectedTab?: string;
}

interface SetBandPayload {
  bandIndex: number;
  colorIndex: number;
}

const initialState: State = {
  // BLACK, BLACK, BLACK, <blank>, BROWN
  bands: [0, 0, 0, -1, 1],
};

const resistorSlice = createSlice({
  name: "resistor",
  initialState,
  reducers: {
    selectTab(state, action: PayloadAction<string | null>) {
      state.selectedTab = action.payload ?? undefined;
    },
    setBand(state, action: PayloadAction<SetBandPayload>) {
      const { bandIndex, colorIndex } = action.payload;
      state.bands[bandIndex] = colorIndex;
    },
  },
});

export const { selectTab, setBand } = resistorSlice.actions;

export default resistorSlice.reducer;
