import { Article as ArticleModel } from '../types/article';

export interface ArticleDetailsModel {
  isLoading: boolean;
  error?: string;
  data?: ArticleModel;
  form?: ArticleModel;
}
