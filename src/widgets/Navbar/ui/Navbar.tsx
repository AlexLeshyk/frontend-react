import cx from 'clsx';
import { SwitcherTheme } from 'widgets/SwitcherTheme';
import { useTranslation } from 'react-i18next';
import { Button } from 'shared/ui';
import { ButtonSize, ButtonTheme } from 'shared/ui/Button/Button.model';
import { LoginModal } from 'features/AuthUserName';

import { useSelector } from 'react-redux';
import { useAppDispatch } from 'shared/hooks';
import { getUserAuthData, userActions } from 'entities/User';
import { memo, useCallback, useState } from 'react';
import classes from './Navbar.module.css';

interface NavbarProps {
  className?: string;
}

export const Navbar = memo(({ className }: NavbarProps) => {
  const { t } = useTranslation();
  const [isAuthModal, setIsAuthModal] = useState(false);
  const dispatch = useAppDispatch();

  const authData = useSelector(getUserAuthData);

  const onCloseModal = useCallback(() => {
    setIsAuthModal(false);
  }, []);

  const onShowModal = useCallback(() => {
    setIsAuthModal(true);
  }, []);

  const onLogout = useCallback(() => {
    dispatch(userActions.logout());
    onCloseModal();
  }, [dispatch, onCloseModal]);

  return (
    <div
      className={cx({
        [classes.wrapper]: true,
        [className]: className,
      })}
    >
      <SwitcherTheme />
      <div className={classes.links}>
        {authData
          ? (
            <Button theme={ButtonTheme.CLEAR} size={ButtonSize.SMALL} onClick={onLogout}>
              {t('Logout')}
            </Button>
          ) : (
            <Button theme={ButtonTheme.CLEAR} size={ButtonSize.SMALL} onClick={onShowModal}>
              {t('Login')}
            </Button>
          )}
      </div>
      {!authData && <LoginModal isOpen={isAuthModal} onClose={onCloseModal} />}
    </div>
  );
});
