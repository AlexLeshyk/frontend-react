import { ReactNode } from 'react';
import { Provider } from 'react-redux';
import { ReducersMapObject } from '@reduxjs/toolkit';
import { useNavigate } from 'react-router-dom';
import { createReduxStore } from '../config/store';
import { StateModel } from '../config/StateModel';

interface StoreProviderProps {
  children?: ReactNode;
  initalState?: DeepPartial<StateModel>
  asyncReducers?: DeepPartial<ReducersMapObject<StateModel>>
}

export const StoreProvider = (props: StoreProviderProps) => {
  const { children, initalState, asyncReducers } = props;

  const navigate = useNavigate();

  const store = createReduxStore(
    initalState as StateModel,
    asyncReducers as ReducersMapObject<StateModel>,
    navigate,
  );

  return (
    <Provider store={store}>
      {children}
    </Provider>
  );
};
