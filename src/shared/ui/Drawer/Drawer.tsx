import { memo, ReactNode } from 'react';
import cx from 'clsx';
import { useModal } from 'shared/hooks';
import { Overlay } from '../Overlay/Overlay';
import { Portal } from '../Portal/Portal';
import classes from './Drawer.module.css';

interface DrawerProps {
    className?: string;
    children: ReactNode;
    isOpen?: boolean;
    onClose?: () => void;
    lazy?: boolean;
}

export const Drawer = memo((props: DrawerProps) => {
  const {
    className, children, onClose, isOpen, lazy,
  } = props;

  const { isClosing, isMounted, close } = useModal({
    isOpen,
    onClose,
    animationDelay: 300,
  });

  if (lazy && !isMounted) {
    return null;
  }

  return (
    <Portal>
      <div className={cx({
        [classes.drawer]: true,
        [className as string]: className,
        [classes.opened]: isOpen,
        [classes.closed]: isClosing,
      })}
      >
        <Overlay onClick={close} />
        <div
          className={classes.content}
        >
          {children}
        </div>
      </div>
    </Portal>
  );
});
