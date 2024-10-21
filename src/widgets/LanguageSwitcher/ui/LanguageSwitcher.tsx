import { useTranslation } from 'react-i18next';
import cx from 'clsx';

import { Button } from 'shared/ui';
import { ThemeButton } from 'shared/ui/Button/Button';
import classes from './LanguageSwitcher.module.css';

interface LanguageSwitcherProps {
  className?: string;
}

export const LanguageSwitcher = ({ className }: LanguageSwitcherProps) => {
  const { t, i18n } = useTranslation();

  const toggleTranslate = () => {
    i18n.changeLanguage(i18n.language === 'en' ? 'ru' : 'en');
  };
  return (
    <div
      className={cx({
        [classes.language]: true,
        [className]: className,
      })}
    >
      <Button theme={ThemeButton.CLEAR} onClick={toggleTranslate}>
        {t('Language')}
      </Button>
    </div>
  );
};
