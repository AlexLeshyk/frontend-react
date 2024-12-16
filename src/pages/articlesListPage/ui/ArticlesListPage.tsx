/* eslint-disable max-len */
import { ArticleList } from 'entities/Article';
import { ArticleListView } from 'entities/Article/model/types/article';
import { memo } from 'react';
import { useTranslation } from 'react-i18next';
import { Title } from 'shared/ui';
import { TitleSize } from 'shared/ui/Title/Title';

const ArticlesListPage = () => {
  const { t } = useTranslation('articleList');

  return (
    <>
      <Title title={t('ArticlesListPage')} size={TitleSize.H2} />
      <ArticleList
        articles={[]}
        view={ArticleListView.LIST}
      />
    </>
  );
};

export default memo(ArticlesListPage);
