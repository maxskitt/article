import {createSlice} from "@reduxjs/toolkit";
import {ceil, filter, findLast, reverse, sortBy} from "lodash";
import {fetchArticlesCount} from "../../saga/articles/api";

const initialState = {
  collection: [],
  collectionDefault: [],
  choiceCollection: [],
  meta: {},
  param: {
    page: 1,
    total: 1,
    query: null,
    per: 3
  },
  loading: false,
  error: null,
};

const slice = createSlice({
  name: "aritcles",
  initialState,
  reducers: {
    reset: () => initialState,
    articlesRequested: (state, action) => {
      state.loading = true

    },
    articlesSucceeded: (state, action) => {
      state.param.total = fetchArticlesCount();
      state.collection = action.payload.articles
      state.collectionDefault = action.payload.articles
      state.choiceCollection = action.payload.articles
      state.loading = false
    },
    articlesFailed: (state, action) => {
      state.loading = false
      state.error = action.payload.error
    },
    articlesSearch: (state, action) => {
      state.loading = false
      state.choiceCollection = filter(state.collection, {title: action.payload});
    },
    articlesSortDefault: (state, action) => {
      state.loading = false
      state.collection = state.collectionDefault
    },
    articlesSortFirst: (state, action) => {
      state.loading = false
      state.collection = sortBy(state.collection, ['lastSeen'])
    },
    articlesSortLast: (state, action) => {
      state.loading = false
      state.collection = reverse(sortBy(state.collection, ['lastSeen']))
    },
    articlesPagination: (state, action) => {
      state.loading = false
      state.param.page = action.payload
    },
  },
});

export const {
  reset,
  articlesRequested,
  articlesSucceeded,
  articlesFailed,
  articlesSearch,
  articlesSortDefault,
  articlesSortFirst,
  articlesSortLast,
  articlesPagination,

} = slice.actions;

export default slice.reducer;






