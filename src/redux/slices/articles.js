import {createSlice} from "@reduxjs/toolkit";

const initialState = {
  collection: [],
  meta: {},
  param: {
    page: 1,
    query: null,
    per: 5
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
      state.loading = false
      state.collection = action.payload.users
    },
    articlesFailed: (state, action) => {
      state.loading = false
      state.error = action.payload.error
    },
  },
});

export const {reset, articlesRequested, articlesSucceeded, articlesFailed} = slice.actions;

export default slice.reducer;

