import cx from 'clsx';
import { HTMLAttributes, memo, ReactNode } from 'react';

import classes from './Card.module.css';

export enum CardTheme {
  NORMAL = 'normal',
  OUTLINED = 'outlined',
}

interface CardProps extends HTMLAttributes<HTMLDivElement> {
  className?: string;
  children: ReactNode;
  theme?: CardTheme;
}

export const Card = memo((props: CardProps) => {
  const {
    className, children, theme = CardTheme.NORMAL, ...otherProps
  } = props;

  return (
    <div
      className={cx({
        [className as string]: className,
        [classes.card]: true,
        [classes[theme]]: theme,
      })}
      {...otherProps}
    >
      {children}
    </div>
  );
});
