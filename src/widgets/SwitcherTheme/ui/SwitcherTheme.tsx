import { Theme, useTheme } from 'app/providers/ThemeProvider';
import DarkIcon from 'shared/icons/theme-dark.svg';
import LightIcon from 'shared/icons/theme-light.svg';

import { Button } from 'shared/ui';
import classes from './SwitcherTheme.module.css';
import { ButtonTheme } from '../../../shared/ui/Button/Button';

export const SwitcherTheme = () => {
  const { changeTheme, theme } = useTheme();
  return (

    <Button
      theme={ButtonTheme.CLEAR}
      className={classes.switcherButton}
      onClick={changeTheme}
    >
      {theme === Theme.DARK ? <DarkIcon /> : <LightIcon />}
    </Button>
  );
};
