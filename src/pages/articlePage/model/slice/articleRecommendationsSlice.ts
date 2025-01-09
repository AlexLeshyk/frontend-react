import { createEntityAdapter, createSlice } from '@reduxjs/toolkit';
import { StateModel } from 'app/providers/StoreProvider';
import { ArticleModel } from 'entities/Article';
import { getArticleRecommendations } from '../services/getArticleRecommendations/getArticleRecommendations';
import { ArticleRecommendationsModel } from '../types/articleRecommendationsModel';

const recommendationsAdapter = createEntityAdapter<ArticleModel>({
  selectId: (article: ArticleModel) => article.id,
});

const articleRecommendationsSlice = createSlice({
  name: 'articleRecommendationsSlice',
  initialState: recommendationsAdapter.getInitialState<ArticleRecommendationsModel>({
    isLoading: false,
    error: undefined,
    ids: [],
    entities: {},
  }),
  reducers: {
  },
  extraReducers: (builder) => {
    builder
      .addCase(getArticleRecommendations.pending, (state) => {
        state.error = undefined;
        state.isLoading = true;
      })
      .addCase(getArticleRecommendations.fulfilled, (state, action) => {
        state.isLoading = false;
        recommendationsAdapter.setAll(state, action.payload);
      })
      .addCase(getArticleRecommendations.rejected, (state, action) => {
        state.isLoading = false;
        state.error = action.payload;
      });
  },
});

export const getAllArticleRecommendations = recommendationsAdapter.getSelectors<StateModel>(
  (state) => state.articleDetailsPage?.recommendations || recommendationsAdapter.getInitialState(),
);

export const { reducer: articleRecommendationsReducer } = articleRecommendationsSlice;
