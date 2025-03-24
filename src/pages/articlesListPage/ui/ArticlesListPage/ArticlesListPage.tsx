import { memo, useCallback } from 'react';
import { useTranslation } from 'react-i18next';
import { useSearchParams } from 'react-router-dom';
import { TitleSize } from '@/shared/ui/Title/Title';
import { Page } from '@/widgets/Page';
import { useAppDispatch, useInitialEffect } from '@/shared/hooks';
import { Title } from '@/shared/ui';
import { DynamicModuleLoader, ReducersList } from '@/shared/lib';
import { articlesPageReducer } from '../../model/slice/articlesPageSlice';
import { getNextArticlePage } from '../../model/services/getNextArticlePage/getNextArticlePage';
import { initArticlesPage } from '../../model/services/initArticlesPage/initArticlesPage';
import { ArticlesPageFilters } from '../ArticlesPageFilters/ArticlesPageFilters';
import { ArticleInfiniteList } from '../ArticleInfiniteList/ArticleInfiniteList';

const reducers: ReducersList = {
  articlesPage: articlesPageReducer,
};

const ArticlesListPage = () => {
  const { t } = useTranslation('articleList');
  const dispatch = useAppDispatch();
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
        <ArticleInfiniteList />
      </Page>
    </DynamicModuleLoader>
  );
};

export default memo(ArticlesListPage);
