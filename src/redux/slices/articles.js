import {createSlice} from "@reduxjs/toolkit";
import {ceil, reverse, sortBy} from "lodash";

const initialState = {
  collection: [],
  collectionDefault: [],
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
      state.param.total = ceil(action.payload.articles.length/3)
      state.collection = action.payload.articles
      state.collectionDefault = action.payload.articles
      state.loading = false
    },
    articlesFailed: (state, action) => {
      state.loading = false
      state.error = action.payload.error
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
  articlesSortDefault,
  articlesSortFirst,
  articlesSortLast,
  articlesPagination,
} = slice.actions;

export default slice.reducer;






