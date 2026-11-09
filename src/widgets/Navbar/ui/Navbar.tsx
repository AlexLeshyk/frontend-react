import cx from 'clsx';
import { useTranslation } from 'react-i18next';
import { useSelector } from 'react-redux';
import { memo, useCallback, useState } from 'react';
import { Button, ButtonSize, ButtonTheme } from '@/shared/ui/Button';
import { getUserAuthData } from '@/entities/User';
import { LoginModal } from '@/features/AuthUserName';
import { LinkComponent, LinkTheme } from '@/shared/ui/LinkComponent';
import { HStack } from '@/shared/ui/Stack';
import { RoutePath } from '@/shared/const/router';
import { Text, TextTheme, TextSize } from '@/shared/ui/Text';

import { NotificationButton } from '@/features/NotificationButton';
import { DropdownMenu } from '@/features/DropdownMenu';
import classes from './Navbar.module.css';

interface NavbarProps {
  className?: string;
}

export const Navbar = memo(({ className }: NavbarProps) => {
  const { t } = useTranslation();
  const [isAuthModal, setIsAuthModal] = useState(false);

  const authData = useSelector(getUserAuthData);

  const onCloseModal = useCallback(() => {
    setIsAuthModal(false);
  }, []);

  const onShowModal = useCallback(() => {
    setIsAuthModal(true);
  }, []);

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
      <HStack gap="16" className={classes.links}>
        <NotificationButton />
        {authData
          ? (
            <DropdownMenu />
          ) : (
            <Button theme={ButtonTheme.CLEAR} size={ButtonSize.SMALL} onClick={onShowModal}>
              {t('Login')}
            </Button>
          )}
      </HStack>
      {!authData && <LoginModal isOpen={isAuthModal} onClose={onCloseModal} />}
    </header>
  );
});
