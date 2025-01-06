import { createEntityAdapter, createSlice, PayloadAction } from '@reduxjs/toolkit';
import { StateModel } from 'app/providers/StoreProvider';
import { Article, ArticleListView, ArticleSortField } from 'entities/Article/model/types/article';
import { ARTICLES_VIEW_LOCALSTORAGE_KEY } from 'shared/const/localstorage';
import { SortOrder } from 'shared/types';
import { ArticlePageModel } from '../types/articlePageModel';
import { getArticlesList } from '../services/getArticlesList/getArticlesList';

const articlesAdapter = createEntityAdapter<Article>({
  selectId: (article) => article.id,
});

export const getArticles = articlesAdapter.getSelectors<StateModel>(
  (state) => state.articlesPage || articlesAdapter.getInitialState(),
);

const articlesPageSlice = createSlice({
  name: 'articlesPageSlice',
  initialState: articlesAdapter.getInitialState<ArticlePageModel>({
    isLoading: false,
    error: undefined,
    view: ArticleListView.TILE,
    ids: [],
    entities: {},
    hasPage: true,
    page: 1,
    inited: false,
    limit: 9,
    order: 'asc',
    search: '',
    sort: ArticleSortField.CREATED,
  }),
  reducers: {
    setView: (state, action: PayloadAction<ArticleListView>) => {
      state.view = action.payload;
      localStorage.setItem(ARTICLES_VIEW_LOCALSTORAGE_KEY, action.payload);
    },
    setPage: (state, action: PayloadAction<number>) => {
      state.page = action.payload;
    },
    setSort: (state, action: PayloadAction<ArticleSortField>) => {
      state.sort = action.payload;
    },
    setOrder: (state, action: PayloadAction<SortOrder>) => {
      state.order = action.payload;
    },
    setSerch: (state, action: PayloadAction<string>) => {
      state.search = action.payload;
    },
    initState: (state) => {
      const view = localStorage.getItem(ARTICLES_VIEW_LOCALSTORAGE_KEY) as ArticleListView;
      state.view = view;
      state.limit = view === ArticleListView.LIST ? 4 : 9;
      state.inited = true;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(getArticlesList.pending, (state, action) => {
        state.error = undefined;
        state.isLoading = true;

        if (action.meta.arg.replace) {
          articlesAdapter.removeAll(state);
        }
      })
      .addCase(getArticlesList.fulfilled, (
        state,
        action,
      ) => {
        state.isLoading = false;
        state.hasPage = action.payload.length >= state.limit;

        if (action.meta.arg.replace) {
          articlesAdapter.setAll(state, action.payload);
        } else {
          articlesAdapter.addMany(state, action.payload);
        }
      })
      .addCase(getArticlesList.rejected, (state, action) => {
        state.isLoading = false;
        state.error = action.payload;
      });
  },
});

export const { reducer: articlesPageReducer, actions: articlesPageActions } = articlesPageSlice;
