import { memo } from 'react';
import { useTranslation } from 'react-i18next';

const ArticlePage = () => {
  const { t } = useTranslation('article');

  return <div>{t('ArticlePage')}</div>;
};

export default memo(ArticlePage);
