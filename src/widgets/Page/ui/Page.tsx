import cx from 'clsx';
import { ReactNode, useLayoutEffect, UIEvent } from 'react';
import { useAppDispatch, useScrollIntersection, useThrottle } from 'shared/hooks';
import { getScrollSaveByPath, setScrollPosition } from 'features/ScrollSave';
import { useLocation } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { StateModel } from 'app/providers/StoreProvider';
import { useThrottledCallback } from '@mantine/hooks';

import classes from './Page.module.css';

interface PageProps {
  children: ReactNode;
  className?: string;
  onScrollEnd?: () => void;
}

export const Page = (props: PageProps) => {
  const { className, children, onScrollEnd } = props;

  const { triggerRef, containerRef } = useScrollIntersection({ callback: onScrollEnd });
  const dispatch = useAppDispatch();
  const { pathname } = useLocation();
  const scrollPosition = useSelector((state: StateModel) => getScrollSaveByPath(state, pathname));

  useLayoutEffect(() => {
    if (containerRef.current) {
      containerRef.current.scrollTop = scrollPosition;
    }
  }, []);

  const throttledOnScroll = useThrottle((value) => {
    dispatch(setScrollPosition({ path: pathname, position: value }));
  }, 800);

  return (
    <section
      className={cx({
        [classes.wrapper]: true,
        [className as string]: className,
      })}
      ref={containerRef}
      onScroll={(event: UIEvent<HTMLDivElement>) => throttledOnScroll(event.currentTarget.scrollTop)}
    >
      {children}
      {onScrollEnd ? <div ref={triggerRef} className={classes.trigger} /> : null}
    </section>
  );
};
