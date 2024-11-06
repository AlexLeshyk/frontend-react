import React, {
  FC, ReactNode, useCallback, useEffect, useRef, useState,
} from 'react';
import { Portal } from 'shared/ui';
import cx from 'clsx';

import classes from './Modal.module.css';

interface ModalProps {
  className?: string;
  children?: ReactNode;
  isOpen? : boolean;
  onClose? : () => void;
}

export const Modal: FC<ModalProps> = (props) => {
  const {
    className = '', children, isOpen, onClose,
  } = props;

  const ANIMATION_DELAY = 250;
  const [isClosing, setIsClosing] = useState<boolean>(false);
  const timerRef = useRef <ReturnType<typeof setTimeout>>();

  const closeHandler = useCallback(() => {
    if (onClose) {
      setIsClosing(true);
      timerRef.current = setTimeout(() => {
        onClose();
        setIsClosing(false);
      }, ANIMATION_DELAY);
    }
  }, [onClose]);

  const onKeyDown = useCallback((e: KeyboardEvent) => {
    if (e.key === 'Escape') {
      closeHandler();
    }
  }, [closeHandler]);

  const onContentClick = (e: React.MouseEvent) => {
    e.stopPropagation();
  };

  useEffect(() => {
    if (isOpen) {
      window.addEventListener('keydown', onKeyDown);
    }
    return () => {
      clearTimeout(timerRef.current);
      window.removeEventListener('keydown', onKeyDown);
    };
  }, [isOpen, onKeyDown]);

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
        <div className={classes.overlay} onClick={closeHandler}>
          <div className={classes.content} onClick={onContentClick}>
            {children}
          </div>
        </div>
      </div>
    </Portal>

  );
};
