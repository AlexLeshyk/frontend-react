import cx from 'clsx';
import { ButtonHTMLAttributes, memo, ReactNode } from 'react';
import { ButtonSize, ButtonTheme } from './Button.model';

import classes from './Button.module.css';

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  className?: string;
  theme?: ButtonTheme;
  square?: boolean;
  size?: ButtonSize;
  disabled?: boolean;
  children?: ReactNode;
}

export const Button = memo((props: ButtonProps) => {
  const {
    className,
    disabled,
    children,
    size = ButtonSize.MEDIUM,
    square,
    theme = ButtonTheme.OUTLINE,
    ...otherProps
  } = props;

  return (
    <button
      type="button"
      className={cx({
        [classes.button]: true,
        [className as string]: className,
        [classes[theme]]: theme,
        [classes.square]: square,
        [classes[size]]: size,
      })}
      {...otherProps}
      disabled={disabled}
    >
      {children}
    </button>
  );
});
