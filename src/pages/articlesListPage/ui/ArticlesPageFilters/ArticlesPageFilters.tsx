import { ArticleListView, ArticleSortField, ArticleSortSelector } from 'entities/Article';
import { ArticleViewSelector } from 'features/ArticleViewSelector';
import { memo, useCallback } from 'react';
import { useAppDispatch, useDebounce } from 'shared/hooks';
import { useSelector } from 'react-redux';
import { Card, Input } from 'shared/ui';
import { useTranslation } from 'react-i18next';
import { SortOrder } from 'shared/types';
import { articlesPageActions } from '../../model/slice/articlesPageSlice';
import {
  getArticlesPageOrder, getArticlesPageSearch, getArticlesPageSort, getArticlesPageView,
}
  from '../../model/selectors/articlesPageSelectors';
import { getArticlesList } from '../../model/services/getArticlesList/getArticlesList';

import classes from './ArticlesPageFilters.module.css';

export const ArticlesPageFilters = memo(() => {
  const { t } = useTranslation('articleList');

  const dispatch = useAppDispatch();
  const view = useSelector(getArticlesPageView);
  const order = useSelector(getArticlesPageOrder);
  const sort = useSelector(getArticlesPageSort);
  const search = useSelector(getArticlesPageSearch);

  const getData = useCallback(() => {
    dispatch(getArticlesList({ replace: true }));
  }, [dispatch]);

  const debouncedGetData = useDebounce(getData, 500);
  const onChangeView = useCallback((view: ArticleListView) => {
    dispatch(articlesPageActions.setView(view));
  }, [dispatch]);

  const onChangeOrder = useCallback((order: SortOrder) => {
    dispatch(articlesPageActions.setOrder(order));
    dispatch(articlesPageActions.setPage(1));
    getData();
  }, [dispatch, getData]);

  const onChangeSort = useCallback((sort: ArticleSortField) => {
    dispatch(articlesPageActions.setSort(sort));
    dispatch(articlesPageActions.setPage(1));
    getData();
  }, [dispatch, getData]);

  const onChangeSearch = useCallback((search: string) => {
    dispatch(articlesPageActions.setSerch(search));
    dispatch(articlesPageActions.setPage(1));
    debouncedGetData();
  }, [dispatch, debouncedGetData]);

  return (
    <div>
      <div className={classes.sortWrapper}>
        <ArticleSortSelector
          order={order}
          sort={sort}
          onChangeOrder={onChangeOrder}
          onChangeSort={onChangeSort}
        />
        <ArticleViewSelector view={view} onViewClick={onChangeView} />
      </div>
      <Card className={classes.search}>
        <Input
          placeholder={t('Search')}
          value={search}
          onChange={onChangeSearch}
        />
      </Card>
    </div>

  );
});
