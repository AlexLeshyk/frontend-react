import { EntityState } from '@reduxjs/toolkit';
import { ArticleModel } from '@/entities/Article';

export interface ArticleRecommendationsModel extends EntityState<ArticleModel> {
  isLoading?: boolean;
  error?: string;
}
