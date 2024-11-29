import { memo } from 'react';
import { useTranslation } from 'react-i18next';

const ArticlesListPage = () => {
  const { t } = useTranslation('articleList');

  return <div>{t('ArticlesListPage')}</div>;
};

export default memo(ArticlesListPage);
