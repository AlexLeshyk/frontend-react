import { FC } from 'react';
import { Link, LinkProps } from 'react-router-dom';
import cx from 'clsx';

import classes from './LinkComponent.module.css';
import { LinkTheme } from './LinkComponent.model';

interface LinkComponentProps extends LinkProps {
  className?: string;
  theme?: LinkTheme;
}

export const LinkComponent: FC<LinkComponentProps> = (props) => {
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
        [className]: className,
        [classes[theme]]: theme,
      })}
      {...otherProps}
    >
      {children}
    </Link>
  );
};
