import cx from 'clsx';

import { CSSProperties, memo, useMemo } from 'react';
import classes from './Avatar.module.css';

interface AvatarProps {
  alt?: string;
  size?: number;
  src?: string;
  className?: string;
}

export const Avatar = memo((props: AvatarProps) => {
  const {
    alt, src, size, className,
  } = props;

  const styles = useMemo<CSSProperties>(() => ({
    width: size,
    height: size,
  }), [size]);

  return (
    <img
      src={src}
      alt={alt}
      className={cx({
        [classes.image]: true,
        [className as string]: className,
      })}
      style={styles}
    />
  );
});
