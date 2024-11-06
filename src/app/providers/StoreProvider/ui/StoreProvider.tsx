import { ReactNode } from 'react';
import { Provider } from 'react-redux';
import { DeepPartial } from '@reduxjs/toolkit';
import { createReduxStore } from '../config/store';
import { StateModel } from '../config/StateModel';

interface StoreProviderProps {
  children?: ReactNode;
  initalState?: DeepPartial<StateModel>
}

export const StoreProvider = (props: StoreProviderProps) => {
  const { children, initalState } = props;

  const store = createReduxStore(initalState as StateModel);

  return (
    <Provider store={store}>
      {children}
    </Provider>
  );
};
