import cx from 'clsx';

import { Loader, Modal } from 'shared/ui';
import { Suspense } from 'react';
import { LoginFormAsync } from '../LoginForm/LoginForm.async';

interface LoginModalProps {
  className?: string;
  isOpen: boolean;
  onClose: () => void;
}

export const LoginModal = (props: LoginModalProps) => {
  const { className, isOpen, onClose } = props;
  return (
    <Modal
      className={cx({
        [className]: className,
      })}
      isOpen={isOpen}
      onClose={onClose}
      lazy
    >
      <Suspense fallback={<Loader />}>
        <LoginFormAsync onCLoseModal={onClose} />
      </Suspense>
    </Modal>
  );
};
