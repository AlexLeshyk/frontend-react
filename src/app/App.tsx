import cx from 'clsx';
import { Suspense, useEffect } from 'react';
import { useSelector } from 'react-redux';
import { useAppDispatch } from '@/shared/hooks';
import { Sidebar } from '@/widgets/Sidebar';
import { Navbar } from '@/widgets/Navbar';
import { getUserMounted, userActions } from '@/entities/User';
import { AppRouter } from './providers/router';

export const App = () => {
  const dispatch = useAppDispatch();
  const mounted = useSelector(getUserMounted);

  useEffect(() => {
    dispatch(userActions.initAuthData());
  }, [dispatch]);

  return (
    <div className={cx('app')}>
      <Suspense fallback="">
        <Navbar className="navbar" />
        <div className="content-page">
          <Sidebar className="sidebar" />
          {mounted && <AppRouter />}
        </div>
      </Suspense>
    </div>
  );
};
