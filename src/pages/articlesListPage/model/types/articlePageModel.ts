import { EntityState } from '@reduxjs/toolkit';
import {
  Article, ArticleListView, ArticleSortField, ArticleType,
} from 'entities/Article/model/types/article';
import { SortOrder } from 'shared/types';

export interface ArticlePageModel extends EntityState<Article> {
  isLoading?: boolean;
  error?: string;
  view: ArticleListView;
  limit: number;
  page: number;
  hasPage: boolean;
  inited: boolean;
  order: SortOrder;
  sort: ArticleSortField;
  search: string;
  type: ArticleType
}
