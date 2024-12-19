import cx from 'clsx';

import { ReactNode } from 'react';

import { useScrollIntersection } from 'shared/hooks';
import classes from './Page.module.css';

interface PageProps {
  children: ReactNode;
  className?: string;
  onScrollEnd?: () => void;
}

export const Page = (props: PageProps) => {
  const { className, children, onScrollEnd } = props;

  const { triggerRef, containerRef } = useScrollIntersection({ callback: onScrollEnd });

  return (
    <section
      className={cx({
        [classes.wrapper]: true,
        [className as string]: className,
      })}
      ref={containerRef}
    >
      {children}
      <div ref={triggerRef} />
    </section>
  );
};
