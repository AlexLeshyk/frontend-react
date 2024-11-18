import { createSlice } from '@reduxjs/toolkit';
import { ProfileModel } from '../types/profileType';

const initialState: ProfileModel = {
  readonly: true,
  isLoading: false,
  data: undefined,
  error: undefined,
};

export const profileSlice = createSlice({
  name: 'profile',
  initialState,
  reducers: {
  },
});

export const { actions: profileActions } = profileSlice;
export const { reducer: profileReducer } = profileSlice;
