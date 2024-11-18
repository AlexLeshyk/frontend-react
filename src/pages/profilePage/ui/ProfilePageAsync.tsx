import { lazy } from 'react';

export const ProfilePageAsync = lazy(() => new Promise((resolve) => {
  // так делать не нужно, задержка искуственная
  setTimeout(() => {
    // @ts-ignore
    resolve(import('./ProfilePage'));
  }, 1500);
}));
