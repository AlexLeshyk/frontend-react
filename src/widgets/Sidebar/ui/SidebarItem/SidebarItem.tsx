import { LinkComponent } from 'shared/ui';
import { useTranslation } from 'react-i18next';
import { memo } from 'react';
import cx from 'clsx';
import { LinkTheme } from 'shared/ui/LinkComponent/LinkComponent.model';
import { useSelector } from 'react-redux';
import { getUserAuthData } from 'entities/User';
import { SidebarItemType } from '../../model/items';

import classes from './SidebarItem.module.css';

interface SidebarItemProps {
  item: SidebarItemType;
  collapsed: boolean;
}

export const SidebarItem = memo(({ item, collapsed }: SidebarItemProps) => {
  const { t } = useTranslation();

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
        [classes.collapsed]: collapsed,
      })}
    >
      <item.Icon className={classes.icon} />
      <span className={classes.text}>
        {t(item.text)}
      </span>
    </LinkComponent>
  );
});
