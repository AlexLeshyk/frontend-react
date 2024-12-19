import { EntityState } from '@reduxjs/toolkit';
import { Article, ArticleListView } from 'entities/Article/model/types/article';

export interface ArticlePageModel extends EntityState<Article> {
  isLoading?: boolean;
  error?: string;
  view: ArticleListView;
  limit?: number;
  page: number;
  hasPage: boolean;
  inited: boolean;
}
