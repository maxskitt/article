import {createSlice} from "@reduxjs/toolkit";
import {ceil} from "lodash";

const initialState = {
  collection: [],
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
      state.collection = action.payload.articles
      state.param.total = ceil(action.payload.articles.pop() / 3)
      state.loading = false
    },
    articlesFailed: (state, action) => {
      state.loading = false
      state.error = action.payload.error
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
  articlesPagination,

} = slice.actions;

export default slice.reducer;






