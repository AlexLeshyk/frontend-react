import { DeepPartial } from '@reduxjs/toolkit';
import { Story } from '@storybook/react';
import { StoreProvider } from 'app/providers/StoreProvider';
import { StateModel } from 'app/providers/StoreProvider/config/StateModel';

export const StoreDecorator = (state: DeepPartial<StateModel>) => (StoryComponent: Story) => (
  <StoreProvider initalState={state}>
    <StoryComponent />
  </StoreProvider>
);
