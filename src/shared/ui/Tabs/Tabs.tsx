import cx from 'clsx';
import { memo, ReactNode, useCallback } from 'react';

import { Card, CardTheme } from '../Card/Card';
import classes from './Tabs.module.css';

export interface TabItem<T extends string> {
  value: T;
  content: ReactNode;
}

interface TabsProps<T extends string> {
  className?: string;
  tabs: Array<TabItem<T>>;
  value: T;
  onTabClick: (tab: TabItem<T>) => void;
}

const TabsComponent = <T extends string>(props: TabsProps<T>) => {
  const {
    className, tabs, onTabClick, value,
  } = props;

  const tabHandler = useCallback((tab: TabItem<T>) => () => {
    onTabClick(tab);
  }, [onTabClick]);

  return (
    <div
      className={cx({
        [className as string]: className,
        [classes.tabs]: true,
      })}
    >
      {tabs.map((tab) => (
        <Card
          key={tab.value}
          className={classes.tab}
          theme={tab.value === value ? CardTheme.OUTLINED : CardTheme.NORMAL}
          onClick={tabHandler(tab)}
        >
          {tab.content}
        </Card>
      ))}
    </div>
  );
};

export const Tabs = memo(TabsComponent) as typeof TabsComponent;
