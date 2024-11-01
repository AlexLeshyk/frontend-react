/* eslint-disable i18next/no-literal-string */
import cx from 'clsx';
import { SwitcherTheme } from 'widgets/SwitcherTheme';
import { useTranslation } from 'react-i18next';
import { Button, Modal } from 'shared/ui';
import { ButtonSize, ButtonTheme } from 'shared/ui/Button/Button';
import { useToggle } from 'shared/hooks/useToggle';

import classes from './Navbar.module.css';

interface NavbarProps {
  className?: string;
}

export const Navbar = ({ className }: NavbarProps) => {
  const { t } = useTranslation();
  const [isAuthModal, toggleModal] = useToggle(false);

  return (
    <div
      className={cx({
        [classes.wrapper]: true,
        [className]: className,
      })}
    >
      <SwitcherTheme />
      <div className={classes.links}>
        <Button theme={ButtonTheme.CLEAR} size={ButtonSize.SMALL} onClick={toggleModal}>
          {t('Login')}
        </Button>
      </div>
      <Modal isOpen={isAuthModal} onClose={toggleModal}>
        Content here  Lorem ipsum dolor sit amet consectetur adipisicing elit.
        Dignissimos accusamus itaque fuga voluptate veniam consectetur.
      </Modal>
    </div>
  );
};
