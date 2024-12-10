import cx from 'clsx';
import { HTMLAttributes, memo, ReactNode } from 'react';

import classes from './Card.module.css';

interface CardProps extends HTMLAttributes<HTMLDivElement> {
  className?: string;
  children: ReactNode;
}

export const Card = memo((props: CardProps) => {
  const { className, children, ...otherProps } = props;

  return (
    <div
      className={cx({
        [className as string]: className,
        [classes.card]: true,
      })}
      {...otherProps}
    >
      {children}
    </div>
  );
});
