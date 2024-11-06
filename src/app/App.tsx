import cx from 'clsx';
import { Suspense } from 'react';
import { Navbar } from 'widgets/Navbar';
import { Sidebar } from 'widgets/Sidebar';
import { AppRouter } from './providers/router';

export const App = () => (
  <div className={cx('app')}>
    <Suspense fallback="">
      <Navbar className="navbar" />
      <div className="content-page">
        <Sidebar className="sidebar" />
        <AppRouter />
      </div>
    </Suspense>
  </div>
);
