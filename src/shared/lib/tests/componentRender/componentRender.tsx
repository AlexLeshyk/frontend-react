import { ReactNode } from 'react';
import { render } from '@testing-library/react';
import { I18nextProvider } from 'react-i18next';
import i18nForTests from 'shared/config/i18n/i18nForTests';
import { MemoryRouter } from 'react-router-dom';
import { StoreProvider, StateModel } from 'app/providers/StoreProvider';
import { DeepPartial } from '@reduxjs/toolkit';

export interface componentRenderOptions {
  route?: string;
  initalState?: DeepPartial<StateModel>;
}

export const componentRender = (component: ReactNode, options: componentRenderOptions = {}) => {
  const { route = '/', initalState } = options;

  return render(
    <MemoryRouter initialEntries={[route]}>
      <StoreProvider initalState={initalState}>
        <I18nextProvider i18n={i18nForTests}>
          {component}
        </I18nextProvider>
      </StoreProvider>
    </MemoryRouter>,
  );
};
