import { combineReducers } from "@reduxjs/toolkit";
import { reducer as formReducer } from 'redux-form';

export default combineReducers({
  form: formReducer,
});
