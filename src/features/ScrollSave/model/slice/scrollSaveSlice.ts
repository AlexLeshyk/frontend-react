import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { ScrollSaveModel } from '../types/scrollSaveModel';

const initialState: ScrollSaveModel = {
  scroll: {},
};
const scrollSaveSlice = createSlice({
  name: 'scrollSave',
  initialState,
  reducers: {
    setScrollPosition: (state, { payload }: PayloadAction<{ path: string, position: number}>) => {
      state.scroll[payload.path] = payload.position;
    },
  },

});

export const { setScrollPosition } = scrollSaveSlice.actions;

export const { reducer: scrollSaveReducer } = scrollSaveSlice;
