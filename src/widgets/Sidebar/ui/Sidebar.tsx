/* eslint-disable i18next/no-literal-string */
import cx from 'clsx';
import { LanguageSwitcher } from 'widgets/LanguageSwitcher';
import { SwitcherTheme } from 'widgets/SwitcherTheme';
import { useToggle } from 'shared/hooks/useToggle';
import { Button, LinkComponent } from 'shared/ui';
import { ButtonSize, ButtonTheme } from 'shared/ui/Button/Button';
import { LinkTheme } from 'shared/ui/LinkComponent/LinkComponent';
import { useTranslation } from 'react-i18next';
import { RoutePath } from 'shared/config/routeConfig/routeConfig';
import AboutIcon from 'shared/icons/about.svg';
import MainIcon from 'shared/icons/home.svg';
import classes from './Sidebar.module.css';

interface SidebarProps {
  className?: string;
}

export const Sidebar = ({ className }: SidebarProps) => {
  const [collapsedSidebar, toggleSidebar] = useToggle(false);

  const { t: tAbout } = useTranslation('about');
  const { t } = useTranslation();

  return (
    <div
      data-testid="sidebar"
      className={cx({
        [classes.sidebar]: true,
        [className]: className,
        [classes.collapsed]: collapsedSidebar,
      })}
    >
      <Button
        type="button"
        onClick={toggleSidebar}
        data-testid="sidebar-toggle"
        className={classes.collapsedBtn}
        theme={ButtonTheme.BACKGROUND_INVERTED}
        square
        size={ButtonSize.MEDIUM}
      >
        {collapsedSidebar ? '>' : '<'}
      </Button>
      <div className={classes.links}>
        <LinkComponent
          theme={LinkTheme.SECONDARY}
          to={RoutePath.main}
          className={classes.link}
        >
          <MainIcon className={classes.icon} />
          <span className={classes.text}>
            {t('Main Page')}
          </span>

        </LinkComponent>
        <LinkComponent
          theme={LinkTheme.SECONDARY}
          to={RoutePath.about}
          className={classes.link}
        >
          <AboutIcon className={classes.icon} />
          <span className={classes.text}>
            {tAbout('About')}
          </span>

        </LinkComponent>
      </div>

      <div className={classes.switchers}>
        <SwitcherTheme />
        <LanguageSwitcher className="language-switcher" short={collapsedSidebar} />
      </div>
    </div>
  );
};
