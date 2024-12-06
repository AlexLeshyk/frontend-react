import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { AddCommentFormModel } from '../types/addCommentForm';

const initialState: AddCommentFormModel = {
  message: '',
  error: '',
};

export const addCommentFormSlice = createSlice({
  name: 'addCommentForm',
  initialState,
  reducers: {
    setMessage: (state, action: PayloadAction<string>) => { state.message = action.payload; },
  },
});

export const { actions: addCommentFormActions } = addCommentFormSlice;
export const { reducer: addCommentFormReducer } = addCommentFormSlice;
