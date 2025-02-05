import { memo, ReactNode } from 'react';
import cx from 'clsx';
import { useTheme } from 'app/providers/ThemeProvider';
import { Overlay } from '../Overlay/Overlay';
import { Portal } from '../Portal/Portal';
import classes from './Drawer.module.css';

interface DrawerProps {
    className?: string;
    children: ReactNode;
    isOpen?: boolean;
    onClose?: () => void;
}

export const Drawer = memo((props: DrawerProps) => {
  const {
    className, children, onClose, isOpen,
  } = props;
  const { theme } = useTheme();

  return (
    <Portal>
      <div className={cx({
        [classes.drawer]: true,
        [className as string]: className,
        [classes.opened]: isOpen,
      })}
      >
        <Overlay onClick={onClose} />
        <div
          className={classes.content}
        >
          {children}
        </div>
      </div>
    </Portal>
  );
});
