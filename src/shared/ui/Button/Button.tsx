import cx from 'clsx';
import { ButtonHTMLAttributes, FC } from 'react';

import classes from './Button.module.css';

export enum ThemeButton {
  CLEAR = 'clear',
}

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  className?: string;
  theme?: ThemeButton;
}

export const Button: FC<ButtonProps> = (props) => {
  const {
    className, children, theme, ...otherProps
  } = props;

  return (
    <button
      type="button"
      className={cx({
        [classes.button]: true,
        [classes[className]]: className,
        [classes[theme]]: theme,
      })}
      {...otherProps}
    >
      {children}
    </button>
  );
};
