import cx from 'clsx';
import { Suspense, useEffect } from 'react';
import { Navbar } from 'widgets/Navbar';
import { Sidebar } from 'widgets/Sidebar';
import { userActions } from 'entities/User';
import { useAppDispatch } from 'shared/hooks';
import { AppRouter } from './providers/router';

export const App = () => {
  const dispatch = useAppDispatch();

  useEffect(() => {
    dispatch(userActions.initAuthData());
  }, [dispatch]);

  return (
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
};
