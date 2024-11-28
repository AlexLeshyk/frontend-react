import { useContext } from 'react';
import { LOCAL_STORAGE_THEME, Theme, ThemeContext } from './ThemeContext';

interface useThemeResult {
  theme: Theme;
  changeTheme: () => void;
}

export const useTheme = (): useThemeResult => {
  const { theme, setTheme } = useContext(ThemeContext);

  const changeTheme = () => {
    let activeTheme: Theme;
    switch (theme) {
      case Theme.DARK:
        activeTheme = Theme.LIGHT;
        break;
      case Theme.LIGHT:
        activeTheme = Theme.DARK;
        break;
      // case Theme.ORANGE:
      //   activeTheme = Theme.DARK;
      //   break;
      default: activeTheme = Theme.LIGHT;
    }
    setTheme?.(activeTheme);
    document.body.className = activeTheme;
    localStorage.setItem(LOCAL_STORAGE_THEME, activeTheme);
  };

  return { theme: theme || Theme.LIGHT, changeTheme };
};
