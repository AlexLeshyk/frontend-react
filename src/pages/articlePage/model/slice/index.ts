import { combineReducers } from '@reduxjs/toolkit';
import { ArticleDetailsPageModel } from '../types';
import { articleRecommendationsReducer } from './articleRecommendationsSlice';
import { articleCommentsReducer } from './articleCommentsSlice';

export const articleDetailsPageReducer = combineReducers<ArticleDetailsPageModel>({
  comments: articleCommentsReducer,
  recommendations: articleRecommendationsReducer,
});
