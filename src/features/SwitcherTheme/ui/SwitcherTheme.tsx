import { memo } from 'react';
import DarkIcon from '@/shared/icons/theme-dark.svg';
import LightIcon from '@/shared/icons/theme-light.svg';
import { ButtonTheme } from '@/shared/ui/Button/Button.model';
import { Button } from '@/shared/ui';
import classes from './SwitcherTheme.module.css';
import { Theme } from '@/shared/const/theme';
import { useTheme } from '@/shared/hooks';

export const SwitcherTheme = memo(() => {
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
});
