import cx from 'clsx';
import {
  ChangeEvent, memo, TextareaHTMLAttributes, useEffect, useRef, useState,
} from 'react';

import classes from './Textarea.module.css';

type HTMLTextareaProps = Omit<TextareaHTMLAttributes<HTMLTextAreaElement>, 'value' | 'onChange' | 'readOnly'>;
interface TextareaProps extends HTMLTextareaProps {
  autofocus?: boolean,
  className?: string;
  value?: string;
  onChange?: (value: string) => void
  label?: string
  htmlFor?: string
  readonly?: boolean
}

export const Textarea = memo((props: TextareaProps) => {
  const {
    autofocus, className, htmlFor, onChange, label, placeholder, value, readonly, ...otherProps
  } = props;
  const [_, setIsFocused] = useState(false);
  const ref = useRef<HTMLTextAreaElement>(null);
  const onChangeHandler = (e: ChangeEvent<HTMLTextAreaElement>) => {
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
        [className as string]: className,
        [classes.readonly]: readonly,
      })}
      data-testid="textarea"
    >
      {label && htmlFor && <label className={classes.label} htmlFor={htmlFor}>{label}</label>}
      <textarea
        ref={ref}
        className={classes.textarea}
        id={htmlFor}
        placeholder={placeholder}
        onChange={onChangeHandler}
        value={value}
        readOnly={readonly}
        {...otherProps}
      />
    </div>
  );
});
