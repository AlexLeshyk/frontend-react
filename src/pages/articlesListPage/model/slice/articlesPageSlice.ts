import { createEntityAdapter, createSlice, PayloadAction } from '@reduxjs/toolkit';
import { StateModel } from 'app/providers/StoreProvider';
import { Article, ArticleListView } from 'entities/Article/model/types/article';
import { ArticlePageModel } from '../types/articlePageModel';
import { getArticlesList } from '../services/getArticlesList/getArticlesList';

const articlesAdapter = createEntityAdapter<Article>({
  selectId: (article: Article) => article.id,
});

const articlesPageSlice = createSlice({
  name: 'articlesPageSlice',
  initialState: articlesAdapter.getInitialState<ArticlePageModel>({
    isLoading: false,
    error: undefined,
    view: ArticleListView.TILE,
    ids: [],
    entities: {},
  }),
  reducers: {
    setView: (state, action: PayloadAction<ArticleListView>) => { state.view = action.payload; },
  },
  extraReducers: (builder) => {
    builder
      .addCase(getArticlesList.pending, (state) => {
        state.error = undefined;
        state.isLoading = true;
      })
      .addCase(getArticlesList.fulfilled, (
        state,
        action: PayloadAction<Array<Article>>,
      ) => {
        state.isLoading = false;
        articlesAdapter.setAll(state, action.payload);
      })
      .addCase(getArticlesList.rejected, (state, action) => {
        state.isLoading = false;
        state.error = action.payload;
      });
  },
});

export const getArticles = articlesAdapter.getSelectors<StateModel>(
  (state) => state.articlesPage || articlesAdapter.getInitialState(),
);

export const { reducer: articlesPageReducer, actions: articlesPageActions } = articlesPageSlice;
