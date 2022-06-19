import { all, fork } from "redux-saga/effects";
import giftSaga, { watchGetGifts } from "./giftSaga";

export default function* rootSaga() {
  // all은 배열 안에 있는 것들을 한번에 실행해준다.
  yield all([watchGetGifts()]);
}
