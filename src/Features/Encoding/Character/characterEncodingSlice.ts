import { createSlice, PayloadAction } from '@reduxjs/toolkit';

interface State {
  selectedTab: string | null;
}

const initialState: State = {
  selectedTab: null,
};

const characterEncodingSlice = createSlice({
  name: 'characterEncoding',
  initialState,
  reducers: {
    selectTab(state, action: PayloadAction<string | null>) {
      state.selectedTab = action.payload;
    },
  }
});

export const {
  selectTab,
} = characterEncodingSlice.actions;

export default characterEncodingSlice.reducer;
