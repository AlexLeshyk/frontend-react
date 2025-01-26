import cx from 'clsx';
import { memo } from 'react';
import { TextTheme, TextAlign } from './Text.model';
import classes from './Text.module.css';

export enum TextSize {
  XS = 'size_xs',
  S = 'size_s',
  M = 'size_m',
  L = 'size_l',
  XL = 'size_xl',
}

interface TextProps {
  className?: string;
  text?: string;
  title?: string;
  theme?: TextTheme;
  align?: TextAlign;
  size?: TextSize;
  'data-testid'?: string;
}

type HeaderTagType = 'h1' | 'h2' | 'h3' | 'h4' | 'h5';

const mapSizeToHeaderTag: Record<TextSize, HeaderTagType> = {
  [TextSize.XS]: 'h5',
  [TextSize.S]: 'h4',
  [TextSize.M]: 'h3',
  [TextSize.L]: 'h2',
  [TextSize.XL]: 'h1',
};

export const Text = memo((props: TextProps) => {
  const {
    className,
    title, text,
    theme = TextTheme.PRIMARY,
    align = TextAlign.LEFT,
    size = TextSize.M,
    'data-testid': dataTestId = 'Text',
  } = props;

  const HeaderTag = mapSizeToHeaderTag[size];

  return (
    <div
      className={cx({
        [classes.text]: true,
        [className as string]: className,
        [classes[theme]]: true,
        [classes[align]]: true,
        [classes[size]]: true,
      })}
    >
      {title && <HeaderTag className={classes.title} data-testid={`${dataTestId}.Header`}>{title}</HeaderTag>}
      {text && <p className={classes.text} data-testid={`${dataTestId}.Paragraph`}>{text}</p>}
    </div>
  );
});
