import { useTranslation } from 'react-i18next';
import { memo } from 'react';
import cx from 'clsx';
import { useSelector } from 'react-redux';
import { useMediaQuery } from '@mantine/hooks';
import { LinkTheme } from '@/shared/ui/LinkComponent/LinkComponent.model';
import { getUserAuthData } from '@/entities/User';
import { LinkComponent } from '@/shared/ui';
import { SidebarItemType } from '../../model/types/sidebar';

import classes from './SidebarItem.module.css';

interface SidebarItemProps {
  item: SidebarItemType;
  collapsed: boolean;
}

export const SidebarItem = memo(({ item, collapsed }: SidebarItemProps) => {
  const { t } = useTranslation();
  const isMobile = useMediaQuery('(max-width: 767px)');
  const isAuth = useSelector(getUserAuthData);

  if (item.authOnly && !isAuth) {
    return null;
  }

  return (
    <LinkComponent
      theme={LinkTheme.SECONDARY}
      to={item?.path}
      className={cx({
        [classes.link]: true,
        [classes.collapsed]: collapsed || isMobile,
      })}
    >
      <item.Icon className={classes.icon} />
      <span className={classes.text}>
        {t(item.text)}
      </span>
    </LinkComponent>
  );
});
