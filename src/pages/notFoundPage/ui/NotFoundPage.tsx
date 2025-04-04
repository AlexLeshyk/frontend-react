import { useTranslation } from 'react-i18next';

import { Page } from '@/widgets/Page';
import classes from './NotFoundPage.module.css';

export const NotFoundPage = () => {
  const { t } = useTranslation();

  return <Page><div className={classes.wrapper}>{t('Not Found')}</div></Page>;
};
