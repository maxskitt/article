import { combineReducers } from "@reduxjs/toolkit";
import { reducer as formReducer } from 'redux-form';
import account from "./slices/account";

export default combineReducers({
  account,
  form: formReducer,
});
