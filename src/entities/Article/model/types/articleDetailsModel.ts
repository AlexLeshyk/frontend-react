import { ValidateArticleError } from '@/features/EditArticleForm/consts/consts';
import { Article as ArticleModel } from '../types/article';

export interface ArticleDetailsModel {
  isLoading: boolean;
  readonly: boolean;
  error?: string;
  data?: ArticleModel;
  form?: ArticleModel;
  validateErrors?: Array<ValidateArticleError>;
}
