import cx from 'clsx';
import { ButtonHTMLAttributes, FC } from 'react';

import classes from './Button.module.css';

export enum ButtonTheme {
  CLEAR = 'clear',
  PRIMARY = 'primary',
  OUTLINE = 'outline',
  BACKGROUND = 'background',
  BACKGROUND_INVERTED ='backgroundInverted',
}

export enum ButtonSize {
  SMALL = 'small',
  MEDIUM = 'medium',
  LARGE = 'large',
}

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  className?: string;
  theme?: ButtonTheme;
  square?: boolean;
  size?: ButtonSize;
}

export const Button: FC<ButtonProps> = (props) => {
  const {
    className, children, size, square, theme, ...otherProps
  } = props;

  return (
    <button
      type="button"
      className={cx({
        [classes.button]: true,
        [className]: className,
        [classes[theme]]: theme,
        [classes.square]: square,
        [classes[size]]: size,
      })}
      {...otherProps}
    >
      {children}
    </button>
  );
};
