import cx from 'clsx';
import { LanguageSwitcher } from 'widgets/LanguageSwitcher';
import { SwitcherTheme } from 'widgets/SwitcherTheme';
import { useToggle } from 'shared/hooks';
import { Button, VStack } from 'shared/ui';
import { ButtonSize, ButtonTheme } from 'shared/ui/Button/Button.model';
import { memo, useMemo } from 'react';
import { useMediaQuery } from '@mantine/hooks';
import { useSelector } from 'react-redux';
import { ChevronLeftIcon, ChevronRightIcon } from '@heroicons/react/16/solid';
import { getSidebarItems } from '../../model/selectors/getSidebarItems';
import { SidebarItem } from '../SidebarItem/SidebarItem';

import classes from './Sidebar.module.css';

interface SidebarProps {
  className?: string;
}

export const Sidebar = memo(({ className }: SidebarProps) => {
  const isMobile = useMediaQuery('(max-width: 767px)');
  const [collapsedSidebar, toggleSidebar] = useToggle(false);

  const sidebarItemList = useSelector(getSidebarItems);

  const itemsList = useMemo(() => sidebarItemList.map((item) => (
    <SidebarItem item={item} collapsed={collapsedSidebar} key={item.path} />
  )), [collapsedSidebar, sidebarItemList]);

  return (
    <aside
      data-testid="sidebar"
      className={cx({
        [classes.sidebar]: true,
        [className as string]: className,
        [classes.collapsed]: collapsedSidebar || isMobile,
      })}
    >
      {!isMobile && (
        <Button
          type="button"
          onClick={toggleSidebar}
          data-testid="sidebar-toggle"
          className={classes.collapsedBtn}
          theme={ButtonTheme.BACKGROUND_INVERTED}
          square
          size={ButtonSize.MEDIUM}
        >
          {collapsedSidebar ? <ChevronRightIcon width={24} height={24} /> : <ChevronLeftIcon height={24} width={24} />}
        </Button>
      )}

      <VStack role="navigation" className={classes.links} gap="16">
        {itemsList}
      </VStack>
      <div className={classes.switchers}>
        <SwitcherTheme />
        <LanguageSwitcher className="language-switcher" short={collapsedSidebar || isMobile} />
      </div>
    </aside>
  );
});
