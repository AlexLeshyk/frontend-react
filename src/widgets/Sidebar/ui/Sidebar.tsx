import cx from "clsx";
import { useState } from "react";
import { SwitcherTheme } from "shared/ui";

import classes from "./Sidebar.module.css";

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
      <button onClick={onToggle}>toggle</button>
      <div className={classes.switchers}>
        <SwitcherTheme />
      </div>
    </div>
  );
};
