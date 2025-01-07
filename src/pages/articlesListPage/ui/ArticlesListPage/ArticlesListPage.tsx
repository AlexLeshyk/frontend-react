import { ArticleList } from 'entities/Article';
import { memo, useCallback } from 'react';
import { useTranslation } from 'react-i18next';
import { DynamicModuleLoader, ReducersList } from 'shared/lib';
import { Title } from 'shared/ui';
import { TitleSize } from 'shared/ui/Title/Title';
import { useAppDispatch, useInitialEffect } from 'shared/hooks';
import { useSelector } from 'react-redux';
import { Page } from 'widgets/Page';
import { useSearchParams } from 'react-router-dom';
import { articlesPageReducer, getArticles } from '../../model/slice/articlesPageSlice';
import { getArticlesPageError, getArticlesPageIsLoading, getArticlesPageView }
  from '../../model/selectors/articlesPageSelectors';
import { getNextArticlePage } from '../../model/services/getNextArticlePage/getNextArticlePage';
import { initArticlesPage } from '../../model/services/initArticlesPage/initArticlesPage';
import { ArticlesPageFilters } from '../ArticlesPageFilters/ArticlesPageFilters';

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
  const [searchParams] = useSearchParams();

  useInitialEffect(() => {
    dispatch(initArticlesPage(searchParams));
  });

  const onLoadNextPart = useCallback(() => {
    dispatch(getNextArticlePage());
  }, [dispatch]);

  return (
    <DynamicModuleLoader reducers={reducers} removeAfterUnmount={false}>
      <Page onScrollEnd={onLoadNextPart}>
        <Title title={t('ArticlesListPage')} size={TitleSize.H2} />
        <ArticlesPageFilters />
        <ArticleList
          articles={articles}
          view={view}
          isLoading={isLoading}
        />
      </Page>
    </DynamicModuleLoader>
  );
};

export default memo(ArticlesListPage);
