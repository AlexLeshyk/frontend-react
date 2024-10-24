/* eslint-disable i18next/no-literal-string */
import cx from 'clsx';
import { LanguageSwitcher } from 'widgets/LanguageSwitcher';
import { SwitcherTheme } from 'widgets/SwitcherTheme';
import { useToggle } from 'shared/hooks/useToggle';
import classes from './Sidebar.module.css';

interface SidebarProps {
  className?: string;
}

export const Sidebar = ({ className }: SidebarProps) => {
  const [collapsedSidebar, toggleSidebar] = useToggle(false);

  return (
    <div
      className={cx({
        [classes.sidebar]: true,
        [className]: className,
        [classes.collapsed]: collapsedSidebar,
      })}
    >
      <button type="button" onClick={toggleSidebar}>toggle</button>
      <div className={classes.switchers}>
        <SwitcherTheme />
        <LanguageSwitcher className="language-switcher" />
      </div>
    </div>
  );
};
