import cx from 'clsx';
import { memo } from 'react';
import { TextTheme, TextAlign } from './Text.model';
import classes from './Text.module.css';

interface TextProps {
  className?: string;
  text?: string;
  title?: string;
  theme?: TextTheme;
  align?: TextAlign;
}

export const Text = memo((props: TextProps) => {
  const {
    className, title, text, theme = TextTheme.PRIMARY, align = TextAlign.LEFT,
  } = props;

  return (
    <div
      className={cx({
        [classes.text]: true,
        [className as string]: className,
        [classes[theme]]: true,
        [classes[align]]: true,
      })}
    >
      {title && <p className={classes.title}>{title}</p>}
      {text && <p className={classes.text}>{text}</p>}
    </div>
  );
});
