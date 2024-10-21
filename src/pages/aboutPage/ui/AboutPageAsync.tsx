import { lazy } from 'react';

export const AboutPageAsync = lazy(() => new Promise((resolve) => {
  // так делать не нужно, задержка искуственная
  setTimeout(() => {
    // @ts-ignore
    resolve(import('./AboutPage'));
  }, 1500);
}));
