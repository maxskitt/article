import { takeLatest, call, put } from "redux-saga/effects";
import {fetchArticles} from "./api";
import {articlesFailed, articlesRequested, articlesSucceeded} from "../../redux/slices/articles";

function* articlesRequest() {
  try {
    const response = yield call(fetchArticles);
    yield put(articlesSucceeded({ articles: response }));
  } catch (error) {
    yield put(articlesFailed({ error }));
  }
}

function* articles() {
  yield takeLatest(articlesRequested, articlesRequest);
}

export default articles;
