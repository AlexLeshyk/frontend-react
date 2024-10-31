import cx from 'clsx';
import { useTranslation } from 'react-i18next';
import { Button, ButtonTheme } from 'shared/ui/Button/Button';
import classes from './ErrorStub.module.css';

interface ErrorPageProps {
    className?: string;
}

export const ErrorStub = ({ className }: ErrorPageProps) => {
  const { t } = useTranslation();

  const reloadPage = () => {
    // eslint-disable-next-line no-restricted-globals
    location.reload();
  };

  return (
    <div className={cx({ [classes.pageError]: true, [className]: className })}>
      <p>{t('Unexpected error')}</p>
      <Button onClick={reloadPage} theme={ButtonTheme.OUTLINE}>
        {t('Reload page')}
      </Button>
    </div>
  );
};
