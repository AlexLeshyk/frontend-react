import { Theme, ThemeProvider } from 'app/providers/ThemeProvider';
import { FC } from 'react';

export const ThemeDecorator = (theme: Theme) => (Story: FC) => (
  <ThemeProvider initialTheme={theme}>
    <div className="app">
      <Story />
    </div>
  </ThemeProvider>
);
