import { FC, ReactNode } from 'react';
import cx from 'clsx';
import { useModal } from 'shared/hooks';
import { Portal } from '../Portal/Portal';
import { Overlay } from '../Overlay/Overlay';
import classes from './Modal.module.css';

interface ModalProps {
  className?: string;
  children?: ReactNode;
  isOpen?: boolean;
  onClose?: () => void;
  lazy?: boolean;
}

export const Modal: FC<ModalProps> = (props) => {
  const {
    className = '', children, isOpen, onClose, lazy,
  } = props;

  const ANIMATION_DELAY = 250;
  const { isClosing, isMounted, close } = useModal({
    isOpen,
    onClose,
    animationDelay: ANIMATION_DELAY,
  });

  if (lazy && !isMounted) {
    return null;
  }

  return (
    <Portal>
      <div
        className={cx({
          [classes.wrapper]: true,
          [className]: className,
          [classes.opened]: isOpen,
          [classes.closed]: isClosing,
        })}
        data-testid="modal"
      >
        <Overlay onClick={close} />
        <div className={classes.content}>{children}</div>
      </div>
    </Portal>
  );
};
