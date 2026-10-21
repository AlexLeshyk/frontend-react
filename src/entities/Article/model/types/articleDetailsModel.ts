import { ValidateArticleError } from '@/features/EditArticleForm';
import { Article as ArticleModel } from '../types/article';

export interface ArticleDetailsModel {
  isLoading: boolean;
  readonly: boolean;
  error?: string;
  data?: ArticleModel;
  form?: ArticleModel;
  validateErrors?: Array<ValidateArticleError>;
}
