import { ArticleList, ArticleListView } from 'entities/Article';
import { memo, useCallback } from 'react';
import { useTranslation } from 'react-i18next';
import { DynamicModuleLoader, ReducersList } from 'shared/lib';
import { Title } from 'shared/ui';
import { TitleSize } from 'shared/ui/Title/Title';
import { useAppDispatch, useInitialEffect } from 'shared/hooks';
import { useSelector } from 'react-redux';
import { ArticleViewSelector } from 'features/ArticleViewSelector';
import { Page } from 'widgets/Page';
import { articlesPageReducer, articlesPageActions, getArticles } from '../model/slice/articlesPageSlice';
import { getArticlesPageError, getArticlesPageIsLoading, getArticlesPageView }
  from '../model/selectors/articlesPageSelectors';
import { getNextArticlePage } from '../model/services/getNextArticlePage/getNextArticlePage';
import { initArticlesPage } from '../model/services/initArticlesPage/initArticlesPage';

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
    dispatch(initArticlesPage());
  });

  const onChangeView = useCallback((view: ArticleListView) => {
    dispatch(articlesPageActions.setView(view));
  }, [dispatch]);

  const onLoadNextPart = useCallback(() => {
    dispatch(getNextArticlePage());
  }, [dispatch]);

  return (
    <DynamicModuleLoader reducers={reducers} removeAfterUnmount={false}>
      <Page onScrollEnd={onLoadNextPart}>
        <Title title={t('ArticlesListPage')} size={TitleSize.H2} />
        <ArticleViewSelector view={view} onViewClick={onChangeView} />
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
