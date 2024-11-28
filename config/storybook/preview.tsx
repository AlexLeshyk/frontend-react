import React from 'react';
import { Preview } from '@storybook/react';
import { BrowserRouter } from 'react-router-dom';
import { Theme, ThemeProvider } from '../../src/app/providers/ThemeProvider';
import 'app/styles/index.css';

export const parameters = {
  controls: {
    matchers: {
      color: /(background|color)$/i,
      date: /Date$/,
    },
  },
};

const preview: Preview = {
  decorators: [
    (Story) => (
      <BrowserRouter>
        <ThemeProvider initialTheme={Theme.LIGHT}>
          <div className="app">
            <Story />
          </div>
        </ThemeProvider>
      </BrowserRouter>
    ),
  ],
};

// export const tags = ['autodocs'];

export default preview;
