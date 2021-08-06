import {createSlice} from "@reduxjs/toolkit";
import {isInteger, reverse, sortBy} from "lodash";

const initialState = {
  collection: [],
  collectionPaginator: [],
  meta: {},
  param: {
    page: 0,
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
      let total = action.payload.articles.length / 3;
      if (isInteger(total)) {
        state.param.total = total
      } else {
        state.param.total = Math.ceil(total)
      }
      state.collection = action.payload.articles
      state.loading = false
    },
    articlesFailed: (state, action) => {
      state.loading = false
      state.error = action.payload.error
    },
    articlesStepsNext: (state, action) => {
      state.loading = false
      state.param.page++
    },
    articlesStepsBack: (state, action) => {
      state.loading = false
      state.param.page--
    },
    articlesSortFirst: (state, action) => {
      state.loading = false
      state.collection = sortBy(state.collection, ['name', 'tittle', 'description'])
    },
    articlesSortLast: (state, action) => {
      state.loading = false
      state.collection = reverse(sortBy(state.collection, ['name', 'tittle', 'description']))
    },
  },
});

export const {
  reset,
  articlesRequested,
  articlesSucceeded,
  articlesFailed,
  articlesStepsNext,
  articlesStepsBack,
  articlesDefault,
  articlesSortFirst,
  articlesSortLast
} = slice.actions;

export default slice.reducer;






