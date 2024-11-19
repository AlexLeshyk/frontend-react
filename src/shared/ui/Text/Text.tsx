import cx from 'clsx';
import { memo } from 'react';
import { TextTheme } from './Text.model';
import classes from './Text.module.css';

interface TextProps {
  className?: string;
  text?: string;
  title?: string;
  theme?: TextTheme
}

export const Text = memo((props: TextProps) => {
  const {
    className, title, text, theme = TextTheme.PRIMARY,
  } = props;

  return (
    <div
      className={cx({
        [classes.text]: true,
        [className as string]: className,
        [classes[theme]]: true,
      })}
    >
      {title && <p className={classes.title}>{title}</p>}
      {text && <p className={classes.text}>{text}</p>}
    </div>
  );
});
