import { createContext } from 'react';

export enum Theme {
  LIGHT = 'light_theme',
  DARK = 'dark_theme',
}

export interface ThemeContextProps {
  theme?: Theme;
  setTheme?: (theme: Theme) => void;
}

export const ThemeContext = createContext<ThemeContextProps>({});

export const LOCAL_STORAGE_THEME = 'theme';
