import cx from 'clsx';
import { CSSProperties, memo } from 'react';
import classes from './Skeleton.module.css';

interface TextProps {
  className?: string;
  height?: string | number;
  width?: string | number;
  border?: string;
}

export const Skeleton = memo((props: TextProps) => {
  const {
    className, height, width, border,
  } = props;

  const styles: CSSProperties = {
    width,
    height,
    borderRadius: border,
  };

  return (
    <div
      className={cx({
        [classes.wrapper]: true,
        [className as string]: className,
      })}
      style={styles}
    />
  );
});
