import { memo } from 'react';
import cx from 'clsx';
import classes from './Overlay.module.css';

interface OverlayProps {
  className?: string;
  onClick?: () => void;
}

export const Overlay = memo((props: OverlayProps) => {
  const { className, onClick } = props;

  return (
    <div className={cx({ [classes.overlay]: true, [className as string]: className })} onClick={onClick} />
  );
});
