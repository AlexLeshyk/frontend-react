import cx from 'clsx';
import { useState } from 'react';

import { LanguageSwitcher } from 'widgets/LanguageSwitcher';
import { SwitcherTheme } from 'widgets/SwitcherTheme';
import classes from './Sidebar.module.css';

interface SidebarProps {
  className?: string;
}

export const Sidebar = ({ className }: SidebarProps) => {
  const [collapsed, setCollapsed] = useState<boolean>(false);

  const onToggle = () => {
    setCollapsed((prev) => !prev);
  };

  return (
    <div
      className={cx({
        [classes.sidebar]: true,
        [className]: className,
        [classes.collapsed]: collapsed,
      })}
    >
      <button type="button" onClick={onToggle}>toggle</button>
      <div className={classes.switchers}>
        <SwitcherTheme />
        <LanguageSwitcher className="language-switcher" />
      </div>
    </div>
  );
};
