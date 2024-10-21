import { Theme, useTheme } from 'app/providers/ThemeProvider';
import cx from 'clsx';
import DarkIcon from 'shared/icons/theme-dark.svg';
import LightIcon from 'shared/icons/theme-light.svg';
// import UserIcon  from "shared/images/user-32-32.png";

import { Button } from 'shared/ui';
import classes from './SwitcherTheme.module.css';
import { ThemeButton } from '../../../shared/ui/Button/Button';

interface SwitcherThemeProps {
  className?: string;
}

export const SwitcherTheme = (props: SwitcherThemeProps) => {
  const { className } = props;

  const { changeTheme, theme } = useTheme();
  return (
    <div
      className={cx({
        [classes.switcher]: true,
        [classes[className]]: className,
      })}
    >
      <Button
        theme={ThemeButton.CLEAR}
        className="switcher-button"
        onClick={changeTheme}
      >
        {theme === Theme.DARK ? <DarkIcon /> : <LightIcon />}
      </Button>
    </div>
  );
};
