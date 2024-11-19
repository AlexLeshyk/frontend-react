import { ReactNode } from 'react';
import { Link, LinkProps } from 'react-router-dom';
import cx from 'clsx';

import classes from './LinkComponent.module.css';
import { LinkTheme } from './LinkComponent.model';

interface LinkComponentProps extends LinkProps {
  className?: string;
  theme?: LinkTheme;
  children?: ReactNode
}

export const LinkComponent = (props: LinkComponentProps) => {
  const {
    className,
    children,
    to,
    theme = LinkTheme.PRIMARY,
    ...otherProps
  } = props;
  return (
    <Link
      to={to}
      className={cx({
        [classes.link]: true,
        [className as string]: className,
        [classes[theme]]: theme,
      })}
      {...otherProps}
    >
      {children}
    </Link>
  );
};
