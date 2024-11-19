/* eslint-disable i18next/no-literal-string */
import cx from 'clsx';
import { LanguageSwitcher } from 'widgets/LanguageSwitcher';
import { SwitcherTheme } from 'widgets/SwitcherTheme';
import { useToggle } from 'shared/hooks';
import { Button } from 'shared/ui';
import { ButtonSize, ButtonTheme } from 'shared/ui/Button/Button.model';
import { memo } from 'react';
import { SidebarItemList } from '../../model/items';
import { SidebarItem } from '../SidebarItem/SidebarItem';

import classes from './Sidebar.module.css';

interface SidebarProps {
  className?: string;
}

export const Sidebar = memo(({ className }: SidebarProps) => {
  const [collapsedSidebar, toggleSidebar] = useToggle(false);

  return (
    <div
      data-testid="sidebar"
      className={cx({
        [classes.sidebar]: true,
        [className as string]: className,
        [classes.collapsed]: collapsedSidebar,
      })}
    >
      <Button
        type="button"
        onClick={toggleSidebar}
        data-testid="sidebar-toggle"
        className={classes.collapsedBtn}
        theme={ButtonTheme.BACKGROUND_INVERTED}
        square
        size={ButtonSize.MEDIUM}
      >
        {collapsedSidebar ? '>' : '<'}
      </Button>

      <div className={classes.links}>
        {SidebarItemList.map((item) => (
          <SidebarItem item={item} collapsed={collapsedSidebar} key={item.path} />
        ))}
      </div>
      <div className={classes.switchers}>
        <SwitcherTheme />
        <LanguageSwitcher className="language-switcher" short={collapsedSidebar} />
      </div>
    </div>
  );
});
