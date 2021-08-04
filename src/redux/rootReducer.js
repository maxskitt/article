import { combineReducers } from "@reduxjs/toolkit";
import { reducer as formReducer } from 'redux-form';
import articles from "./slices/articles";

export default combineReducers({
  articles,
  form: formReducer,
});
