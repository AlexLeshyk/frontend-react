/* eslint-disable i18next/no-literal-string */
import cx from 'clsx';
import { SwitcherTheme } from 'widgets/SwitcherTheme';
import { useTranslation } from 'react-i18next';
import { Button } from 'shared/ui';
import { ButtonSize, ButtonTheme } from 'shared/ui/Button/Button';
import { useToggle } from 'shared/hooks/useToggle';
import { LoginModal } from 'features/AuthUserName';

import classes from './Navbar.module.css';

interface NavbarProps {
  className?: string;
}

export const Navbar = ({ className }: NavbarProps) => {
  const { t } = useTranslation();
  const [isAuthModal, _, closeModal, openModal] = useToggle(false);

  return (
    <div
      className={cx({
        [classes.wrapper]: true,
        [className]: className,
      })}
    >
      <SwitcherTheme />
      <div className={classes.links}>
        <Button theme={ButtonTheme.CLEAR} size={ButtonSize.SMALL} onClick={openModal}>
          {t('Login')}
        </Button>
      </div>
      <LoginModal isOpen={isAuthModal} onClose={closeModal} />
    </div>
  );
};
