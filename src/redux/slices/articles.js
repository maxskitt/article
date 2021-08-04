import {createSlice} from "@reduxjs/toolkit";

const initialState = {
  data: {},
};

const slice = createSlice({
  name: "aritcles",
  initialState,
  reducers: {
    reset: () => initialState,
    articleRequested: (state, action) => {
      console.log("action", action)
      state.data = action.payload
    },
  },
});

export const {reset, articleRequested} = slice.actions;

export default slice.reducer;
