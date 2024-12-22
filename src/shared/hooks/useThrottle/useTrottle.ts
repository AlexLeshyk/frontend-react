import { MutableRefObject, useCallback, useRef } from 'react';

export function useThrottle(callback: (...args: any[]) => void, delay: number) {
  const timerRef = useRef<any>(null);

  const throttledCallback = useCallback((...args: any[]) => {
    if (timerRef.current) return;
    timerRef.current = setTimeout(() => {
      callback(...args);
      clearTimeout(timerRef.current);
      timerRef.current = null;
    }, delay);
  }, [callback, delay]);

  return throttledCallback;
}
