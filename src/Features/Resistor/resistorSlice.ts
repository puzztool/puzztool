import { createSlice, PayloadAction } from '@reduxjs/toolkit';

interface State {
  bands: number[];
  selectedTab: string | null;
}

interface SetBandPayload {
  bandIndex: number;
  colorIndex: number;
}

const initialState: State = {
  // BLACK, BLACK, BLACK, <blank>, BROWN
  bands: [0, 0, 0, -1, 1],
  selectedTab: null,
};

const resistorSlice = createSlice({
  name: 'resistor',
  initialState,
  reducers: {
    selectTab(state, action: PayloadAction<string | null>) {
      state.selectedTab = action.payload;
    },
    setBand(state, action: PayloadAction<SetBandPayload>) {
      const { bandIndex, colorIndex } = action.payload;
      state.bands[bandIndex] = colorIndex;
    },
  }
});

export const {
  selectTab,
  setBand,
} = resistorSlice.actions;

export default resistorSlice.reducer;
