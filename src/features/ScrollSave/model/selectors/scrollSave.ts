import { createSelector } from '@reduxjs/toolkit';
import { StateModel } from '@/app/providers/StoreProvider';

export const getScrollSave = (state: StateModel) => state.scrollSave.scroll;

export const getScrollSaveByPath = createSelector(
  getScrollSave,
  (state: StateModel, path: string) => path,
  (scroll, path) => scroll[path] || 0,
);
