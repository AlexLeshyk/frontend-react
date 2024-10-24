import { useTranslation } from 'react-i18next';

import classes from './NotFoundPage.module.css';

export const NotFoundPage = () => {
  const { t } = useTranslation();

  return <div className={classes.wrapper}>{t('Not Found')}</div>;
};
