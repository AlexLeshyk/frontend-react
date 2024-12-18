import { lazy } from 'react';

export const ArticlesListPageAsync = lazy(() => new Promise((resolve) => {
  // так делать не нужно, задержка искуственная
  setTimeout(() => {
    // @ts-ignore
    resolve(import('./ArticlesListPage'));
  }, 400);
}));
