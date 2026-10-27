import { FC } from 'react';
import { Theme } from '@/shared/const/theme';
// eslint-disable-next-line
import { ThemeProvider } from '@/app/providers/ThemeProvider';

export const ThemeDecorator = (theme: Theme) => (Story: FC) => (
  <ThemeProvider initialTheme={theme}>
    <div className="app">
      <Story />
    </div>
  </ThemeProvider>
);
