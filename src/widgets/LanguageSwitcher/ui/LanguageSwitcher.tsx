import { useTranslation } from 'react-i18next';
import cx from 'clsx';

import { Button } from 'shared/ui';
import { ButtonTheme } from 'shared/ui/Button/Button.model';
import { memo } from 'react';
import classes from './LanguageSwitcher.module.css';

interface LanguageSwitcherProps {
  className?: string;
  short?: boolean
}

export const LanguageSwitcher = memo(({ className, short }: LanguageSwitcherProps) => {
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
      <Button theme={ButtonTheme.CLEAR} onClick={toggleTranslate}>
        {short ? t('ShortLanguage') : t('Language')}
      </Button>
    </div>
  );
});
