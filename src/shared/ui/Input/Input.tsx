import cx from 'clsx';
import {
  ChangeEvent, InputHTMLAttributes, memo, useEffect, useRef, useState,
} from 'react';

import classes from './Input.module.css';

type HTMLInputProps = Omit<InputHTMLAttributes<HTMLInputElement>, 'value' | 'onChange'>;
interface InputProps extends HTMLInputProps {
  autofocus?: boolean,
  className?: string;
  value?: string;
  onChange? : (value: string) => void
  label?: string
  htmlFor?: string
}

export const Input = memo((props: InputProps) => {
  const {
    autofocus, className, htmlFor, onChange, label, placeholder, type = 'text', value, ...otherProps
  } = props;
  const [_, setIsFocused] = useState(false);
  const ref = useRef<HTMLInputElement>(null);
  const onChangeHandler = (e: ChangeEvent<HTMLInputElement>) => {
    onChange?.(e.target.value);
  };

  useEffect(() => {
    if (autofocus) {
      setIsFocused(true);
      ref.current?.focus();
    }
  }, [autofocus]);

  return (
    <div
      className={cx({
        [classes.wrapper]: true,
        [className]: className,
      })}
      data-testid="input"
    >
      {label && <label className={classes.label} htmlFor={htmlFor}>{label}</label>}
      <input
        ref={ref}
        className={classes.input}
        id={htmlFor}
        type={type}
        placeholder={placeholder}
        onChange={onChangeHandler}
        value={value}
        {...otherProps}
      />
    </div>
  );
});