import { ArticleList } from 'entities/Article';
import { memo } from 'react';
import { useTranslation } from 'react-i18next';
import { DynamicModuleLoader, ReducersList } from 'shared/lib';
import { Title } from 'shared/ui';
import { TitleSize } from 'shared/ui/Title/Title';
import { useAppDispatch, useInitialEffect } from 'shared/hooks';
import { useSelector } from 'react-redux';
import { articlesPageReducer, getArticles } from '../model/slice/articlesPageSlice';
import { getArticlesList } from '../model/services/getArticlesList/getArticlesList';
import { getArticlesPageError, getArticlesPageIsLoading, getArticlesPageView }
  from '../model/selectors/articlesPageSelectors';

const reducers: ReducersList = {
  articlesPage: articlesPageReducer,
};

const ArticlesListPage = () => {
  const { t } = useTranslation('articleList');
  const dispatch = useAppDispatch();

  const articles = useSelector(getArticles.selectAll);
  const isLoading = useSelector(getArticlesPageIsLoading);
  const eror = useSelector(getArticlesPageError);
  const view = useSelector(getArticlesPageView);

  useInitialEffect(() => {
    dispatch(getArticlesList());
  });

  return (
    <DynamicModuleLoader reducers={reducers} removeAfterUnmount>
      <Title title={t('ArticlesListPage')} size={TitleSize.H2} />
      <ArticleList
        articles={articles}
        view={view}
        isLoading={isLoading}
      />
    </DynamicModuleLoader>
  );
};

export default memo(ArticlesListPage);
