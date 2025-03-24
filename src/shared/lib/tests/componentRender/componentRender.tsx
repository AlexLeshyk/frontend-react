import { ReactNode } from 'react';
import { render } from '@testing-library/react';
import { I18nextProvider } from 'react-i18next';
import { MemoryRouter } from 'react-router-dom';
import { ReducersMapObject } from '@reduxjs/toolkit';
import i18nForTests from '@/shared/config/i18n/i18nForTests';
import { StoreProvider, StateModel } from '@/app/providers/StoreProvider';

export interface componentRenderOptions {
  route?: string;
  initalState?: DeepPartial<StateModel>;
  asyncReducers?: DeepPartial<ReducersMapObject<StateModel>>
}

export const componentRender = (component: ReactNode, options: componentRenderOptions = {}) => {
  const { route = '/', initalState, asyncReducers } = options;

  return render(
    <MemoryRouter initialEntries={[route]}>
      <StoreProvider initalState={initalState} asyncReducers={asyncReducers}>
        <I18nextProvider i18n={i18nForTests}>
          {component}
        </I18nextProvider>
      </StoreProvider>
    </MemoryRouter>,
  );
};
