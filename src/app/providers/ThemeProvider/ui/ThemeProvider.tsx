import { ReactNode, useMemo, useState } from 'react';
import { LOCAL_STORAGE_THEME, Theme, ThemeContext } from '../lib/ThemeContext';

interface ThemeProviderProps {
  initialTheme?: Theme;
  children: ReactNode;
}

export const ThemeProvider = (props: ThemeProviderProps) => {
  const { children, initialTheme } = props;
  const defaultTheme = (localStorage.getItem(LOCAL_STORAGE_THEME) as Theme) || Theme.LIGHT;
  const [theme, setTheme] = useState<Theme>(initialTheme || defaultTheme);
  document.body.className = theme;

  const memoizedTheme = useMemo(() => ({
    theme,
    setTheme,
  }), [theme]);

  return (
    <ThemeContext.Provider value={memoizedTheme}>
      {children}
    </ThemeContext.Provider>
  );
};
