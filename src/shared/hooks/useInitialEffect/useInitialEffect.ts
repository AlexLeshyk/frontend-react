import { useEffect } from 'react';

export const useInitialEffect = (callback: () => void): any => {
  useEffect(() => {
    if (__PROJECT__ !== 'storybook') {
      callback();
    }
  // eslint-disable-next-line
  }, []);
};
