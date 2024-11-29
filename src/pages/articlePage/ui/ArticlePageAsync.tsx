import { lazy } from 'react';

export const ArticlePageAsync = lazy(() => new Promise((resolve) => {
  // так делать не нужно, задержка искуственная
  setTimeout(() => {
    // @ts-ignore
    resolve(import('./ArticlePage'));
  }, 1500);
}));
