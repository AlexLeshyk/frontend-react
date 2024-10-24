import { FC, useMemo, useState } from 'react';
import { LOCAL_STORAGE_THEME, Theme, ThemeContext } from '../lib/ThemeContext';

export const ThemeProvider: FC = ({ children }) => {
  const defaultTheme = (localStorage.getItem(LOCAL_STORAGE_THEME) as Theme) || Theme.LIGHT;
  const [theme, setTheme] = useState<Theme>(defaultTheme);

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
