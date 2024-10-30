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
  const { t: tAbout } = useTranslation('about');
  const { t } = useTranslation();

  return (
    <div
      className={cx({
        [classes.wrapper]: true,
        [className]: className,
      })}
    >
      <SwitcherTheme className="left" />
      <div className={classes.links}>
        <LinkComponent theme={LinkTheme.SECONDARY} to="/">
          {t('Main Page')}
        </LinkComponent>
        {/* eslint-disable-next-line i18next/no-literal-string */}
        <LinkComponent theme={LinkTheme.SECONDARY} to="/about">
          {tAbout('About')}
        </LinkComponent>
      </div>
    </div>
  );
};
