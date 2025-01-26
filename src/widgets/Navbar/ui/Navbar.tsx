import cx from 'clsx';
import { useTranslation } from 'react-i18next';
import {
  Button, LinkComponent, Text, Dropdown, Avatar,
} from 'shared/ui';
import { ButtonSize, ButtonTheme } from 'shared/ui/Button/Button.model';
import { LoginModal } from 'features/AuthUserName';
import { ArrowLeftEndOnRectangleIcon, UserCircleIcon, AdjustmentsHorizontalIcon } from '@heroicons/react/16/solid';
import { useSelector } from 'react-redux';
import { useAppDispatch } from 'shared/hooks';
import {
  getUserAuthData, isUserAdmin, isUserManager, userActions,
} from 'entities/User';
import { memo, useCallback, useState } from 'react';
import { RoutePath } from 'shared/config/routeConfig/routeConfig';
import { LinkTheme } from 'shared/ui/LinkComponent/LinkComponent.model';
import { TextTheme } from 'shared/ui/Text/Text.model';
import { TextSize } from 'shared/ui/Text/Text';
import classes from './Navbar.module.css';

interface NavbarProps {
  className?: string;
}

export const Navbar = memo(({ className }: NavbarProps) => {
  const { t } = useTranslation();
  const [isAuthModal, setIsAuthModal] = useState(false);
  const dispatch = useAppDispatch();

  const authData = useSelector(getUserAuthData);
  const isAdmin = useSelector(isUserAdmin);
  const isManager = useSelector(isUserManager);

  const isAdminAvaliable = isAdmin || isManager;

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
    <header
      className={cx({
        [classes.wrapper]: true,
        [className as string]: className,
      })}
    >
      <Text
        className={classes.appName}
        title={t('App')}
        theme={TextTheme.INVERTED}
        size={TextSize.S}
      />
      <LinkComponent
        to={RoutePath.article_create}
        className={classes.createLink}
        theme={LinkTheme.SECONDARY}
      >
        {t('CreateArticle')}
      </LinkComponent>
      {/* <SwitcherTheme /> */}
      <div className={classes.links}>
        {authData
          ? (
            <Dropdown
              trigger={(
                <>
                  <span>{t('Menu')}</span>
                  <Avatar size={30} src={authData.avatar} />
                </>
)}
              items={[
                ...isAdminAvaliable ? [{
                  content:
                  <>
                    <AdjustmentsHorizontalIcon width={20} height={20} />
                    {t('AdminPanel')}
                  </>,
                  href: RoutePath.admin_panel,
                }] : [],
                {
                  content:
              <>
                <UserCircleIcon width={20} height={20} />
                {t('UserProfile')}
              </>,
                  href: RoutePath.profile + authData.id,
                },
                {
                  content:
              <>
                <ArrowLeftEndOnRectangleIcon width={20} height={20} />
                {t('Logout')}
              </>,
                  onClick: onLogout,
                },
              ]}
            />
          ) : (
            <Button theme={ButtonTheme.CLEAR} size={ButtonSize.SMALL} onClick={onShowModal}>
              {t('Login')}
            </Button>
          )}
      </div>
      {!authData && <LoginModal isOpen={isAuthModal} onClose={onCloseModal} />}
    </header>
  );
});
