import { useContext } from 'react';
import { LOCAL_STORAGE_THEME, Theme, ThemeContext } from './ThemeContext';

interface useThemeResult {
  theme: Theme;
  changeTheme: () => void;
}

export const useTheme = (): useThemeResult => {
  const { theme, setTheme } = useContext(ThemeContext);

  const changeTheme = () => {
    const activeTheme = theme === Theme.DARK ? Theme.LIGHT : Theme.DARK;
    setTheme(activeTheme);
    localStorage.setItem(LOCAL_STORAGE_THEME, activeTheme);
  };

  return { theme, changeTheme };
};
