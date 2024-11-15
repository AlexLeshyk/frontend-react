import { DeepPartial, ReducersMapObject } from '@reduxjs/toolkit';
import { Story } from '@storybook/react';
import { StoreProvider, StateModel } from 'app/providers/StoreProvider';
import { loginReducer } from 'features/AuthUserName/model/slice/loginSlice';

const defaultAsyncReducers: DeepPartial<ReducersMapObject<StateModel>> = {
  loginForm: loginReducer,
};

export const StoreDecorator = (
  state: DeepPartial<StateModel>,
  asyncReducers?: DeepPartial<ReducersMapObject<StateModel>>,
) => (StoryComponent: Story) => (
  <StoreProvider initalState={state} asyncReducers={{ ...defaultAsyncReducers, ...asyncReducers }}>
    <StoryComponent />
  </StoreProvider>
);