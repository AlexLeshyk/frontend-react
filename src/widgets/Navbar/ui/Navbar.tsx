import cx from 'clsx';

import {
  LinkComponent,
  LinkTheme,
} from 'shared/ui/LinkComponent/LinkComponent';
import { SwitcherTheme } from 'widgets/SwitcherTheme';
import { useTranslation } from 'react-i18next';
import classes from './Navbar.module.css';

interface NavbarProps {
  className?: string;
}

export const Navbar = ({ className }: NavbarProps) => {
  const { t } = useTranslation();

  return (
    <div
      className={cx({
        [classes.wrapper]: true,
        [className]: className,
      })}
    >
      <SwitcherTheme />
      <div className={classes.links}>
        <LinkComponent theme={LinkTheme.SECONDARY} to="/">
          {t('Main Page')}
        </LinkComponent>
      </div>
    </div>
  );
};
