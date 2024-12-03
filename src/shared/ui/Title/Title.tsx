import cx from 'clsx';
import { memo } from 'react';
import classes from './Title.module.css';

export enum TitleSize {
  H1 = 'h1',
  H2 = 'h2',
  H3 = 'h3',
  H4 = 'h4',
  H5 = 'h5',
  H6 = 'h6',
}

interface TitleProps {
  className?: string;
  title?: string;
  size?: TitleSize;
}

export const Title = memo((props: TitleProps) => {
  const { className, title, size = TitleSize.H1 } = props;

  const classNamesTitle = cx({
    [classes.title]: true,
    [className as string]: className,
    [classes[size]]: true,
  });

  switch (size) {
    case TitleSize.H2:
      return <h2 className={classNamesTitle}>{title}</h2>;
    case TitleSize.H3:
      return <h3 className={classNamesTitle}>{title}</h3>;
    case TitleSize.H4:
      return <h4 className={classNamesTitle}>{title}</h4>;
    case TitleSize.H5:
      return <h5 className={classNamesTitle}>{title}</h5>;
    case TitleSize.H6:
      return <h3 className={classNamesTitle}>{title}</h3>;
    default: return <h1 className={classNamesTitle}>{title}</h1>;
  }
});
