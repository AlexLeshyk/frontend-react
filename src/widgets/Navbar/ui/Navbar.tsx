import cx from "clsx";

import {
  LinkComponent,
  LinkTheme,
} from "shared/ui/LinkComponent/LinkComponent";
import { SwitcherTheme } from "widgets/SwitcherTheme";
import classes from "./Navbar.module.css";
import { useTranslation } from "react-i18next";

interface NavbarProps {
  className?: string;
}

export const Navbar = ({ className }: NavbarProps) => {
  const { t } = useTranslation();
  const { t: t_about } = useTranslation("about");

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
          {t("Main Page")}
        </LinkComponent>
        <LinkComponent theme={LinkTheme.SECONDARY} to={"/about"}>
          {t_about("About")}
        </LinkComponent>
      </div>
    </div>
  );
};
