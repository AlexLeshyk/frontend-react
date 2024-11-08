import { createSlice } from '@reduxjs/toolkit';
import { UserModel } from '../types/userModel';

export interface CounterState {
  value: number
}

const initialState: UserModel = {};

export const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {},
});

export const { actions: userActions } = userSlice;
export const { reducer: userReducer } = userSlice;
