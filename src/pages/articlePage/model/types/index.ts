import { ArticleCommentsModel } from './articleCommentsModel';
import { ArticleRecommendationsModel } from './articleRecommendationsModel';

export interface ArticleDetailsPageModel {
  comments: ArticleCommentsModel;
  recommendations: ArticleRecommendationsModel;
}
