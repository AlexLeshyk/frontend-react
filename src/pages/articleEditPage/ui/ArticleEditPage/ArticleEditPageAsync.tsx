import { lazy } from 'react';

// так делать не нужно, задержка искуственная
export const ArticleEditPageAsync = lazy(
  () => new Promise((resolve) => {
    setTimeout(() => {
      // @ts-ignore
      resolve(import('./ArticleEditPage'));
    }, 1500);
  }),
);
