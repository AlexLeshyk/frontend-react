import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { LoginModel } from '../types/loginModel';
import { loginByUserName } from '../services/loginByUserName/loginByUserName';

export interface CounterState {
  value: number
}

const initialState: LoginModel = {
  userName: '',
  password: '',
  isLoading: false,
};

export const loginSlice = createSlice({
  name: 'login',
  initialState,
  reducers: {
    setUsername: (state, action: PayloadAction<string>) => { state.userName = action.payload; },
    setPassword: (state, action: PayloadAction<string>) => { state.password = action.payload; },
  },
  extraReducers: (builder) => {
    builder
      .addCase(loginByUserName.pending, (state) => {
        state.error = undefined;
        state.isLoading = true;
      })
      .addCase(loginByUserName.fulfilled, (state) => {
        state.isLoading = false;
      })
      .addCase(loginByUserName.rejected, (state, action) => {
        state.isLoading = false;
        state.error = action.payload;
      });
  },
});

export const { actions: loginActions } = loginSlice;
export const { reducer: loginReducer } = loginSlice;
