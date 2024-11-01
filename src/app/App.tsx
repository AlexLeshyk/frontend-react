import cx from 'clsx';
import { Suspense } from 'react';
import { Theme } from 'app/providers/ThemeProvider/lib/ThemeContext';
import { useTheme } from 'app/providers/ThemeProvider';
import { Navbar } from 'widgets/Navbar';
import { Sidebar } from 'widgets/Sidebar';
import { AppRouter } from './providers/router';

export const App = () => {
  const { theme } = useTheme();

  return (
    <div
      className={cx('app', {
        light: theme === Theme.LIGHT,
        dark: theme === Theme.DARK,
      })}
    >
      <Suspense fallback="">
        <Navbar className="navbar" />
        <div className="content-page">
          <Sidebar className="sidebar" />
          <AppRouter />
        </div>
      </Suspense>
    </div>
  );
};
