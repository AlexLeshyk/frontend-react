import { useIntersection } from '@mantine/hooks';
import { useEffect, useRef } from 'react';

export interface UseScrollIntersectionOptions {
  callback?: () => void;
}

export const useScrollIntersection = ({ callback }: UseScrollIntersectionOptions) => {
  const containerRef = useRef<HTMLDivElement>(null);
  const { ref: triggerRef, entry } = useIntersection({
    root: containerRef.current,
    threshold: 1,
  });

  useEffect(() => {
    if (entry?.isIntersecting) {
      callback?.();
    }
  }, [callback, entry?.isIntersecting]);

  return { triggerRef, containerRef };
};
