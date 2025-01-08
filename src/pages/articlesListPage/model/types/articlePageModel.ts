import { EntityState } from '@reduxjs/toolkit';
import {
  ArticleModel, ArticleListView, ArticleSortField, ArticleType,
} from 'entities/Article';
import { SortOrder } from 'shared/types';

export interface ArticlePageModel extends EntityState<ArticleModel> {
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
