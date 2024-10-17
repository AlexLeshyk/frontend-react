import cx from "clsx";

import classes from "./Navbar.module.css";
import {
  LinkComponent,
  LinkTheme,
} from "shared/ui/LinkComponent/LinkComponent";
import { SwitcherTheme } from "shared/ui";

interface NavbarProps {
  className?: string;
}

export const Navbar = ({ className }: NavbarProps) => {
  return (
    <div
      className={cx({
        [classes.wrapper]: true,
        [className]: className,
      })}
    >
      <SwitcherTheme className="left" />
      <div className={classes.links}>
        <LinkComponent theme={LinkTheme.SECONDARY} to={"/"}>
          Главная страница
        </LinkComponent>
        <LinkComponent theme={LinkTheme.SECONDARY} to={"/about"}>
          О нас
        </LinkComponent>
      </div>
    </div>
  );
};
