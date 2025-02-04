import { memo, useCallback } from 'react';
import cx from 'clsx';
import { Dropdown, Avatar } from 'shared/ui';
import { ArrowLeftEndOnRectangleIcon, UserCircleIcon, AdjustmentsHorizontalIcon } from '@heroicons/react/16/solid';
import { useDispatch, useSelector } from 'react-redux';
import {
  getUserAuthData, isUserAdmin, isUserManager, userActions,
} from 'entities/User';
import { useTranslation } from 'react-i18next';
import { RoutePath } from 'shared/config/routeConfig/routeConfig';

export interface DropdownMenuProps {
  className?: string;
}

export const DropdownMenu = memo((props: DropdownMenuProps) => {
  const { className } = props;

  const { t } = useTranslation();
  const dispatch = useDispatch();
  const authData = useSelector(getUserAuthData);
  const isAdmin = useSelector(isUserAdmin);
  const isManager = useSelector(isUserManager);

  const isAdminAvaliable = isAdmin || isManager;

  const onLogout = useCallback(() => {
    dispatch(userActions.logout());
  }, [dispatch]);

  if (!authData) {
    return null;
  }

  return (
    <Dropdown
      className={cx({ [className as string]: className })}
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
  );
});
