import { all, call, fork, put, take, takeLatest } from "redux-saga/effects";
import {
  SELECT_ALL_GIFTS,
  GIFTS_REQUEST,
  FAILED_REQUEST,
  SEARCH_REQUEST,
  UPDATE_VIEW,
} from "../reducers/gifts";
import { giftsAxios } from "../http/GiftsAxios";

function* handleSortGift(action) {
  try {
    console.log("sort start");
    console.log(action.data.sortKey);
    const sortKey = action.data.sortKey;
    const allGifts = yield call(giftsAxios, "/gift/", "get");
    console.log(allGifts, sortKey);
    const gifts = allGifts.slice();
    console.log(gifts);
    if (sortKey === "default") {
      console.log("no sort");
    } else if (sortKey === "count") {
      gifts.sort(function (a, b) {
        return b.count - a.count;
      });
      console.log("sort by count");
    } else if (sortKey === "view") {
      gifts.sort(function (a, b) {
        return b.views - a.views;
      });
      console.log("sort by view");
    } else if (sortKey === "lprice") {
      gifts.sort(function (a, b) {
        return a.price - b.price;
      });
      console.log("sort by lprice");
    } else if (sortKey === "hprice") {
      gifts.sort(function (a, b) {
        return b.price - a.price;
      });
      console.log("sort by hprice");
    }
    yield put({
      type: SELECT_ALL_GIFTS,
      payload: gifts,
    }); //put은 특정 액션을 dispatch한다
  } catch (error) {
    yield put({
      type: FAILED_REQUEST,
      error: error,
    });
  }
}

function* handleSearchGifts(action) {
  try {
    console.log("search start");
    const giftName = action.data.giftName;
    let gifts;
    if (giftName === undefined || giftName === "") {
      gifts = yield call(giftsAxios, "/gift/", "get"); //call은 주어진 함수를 실행한다
    } else {
      console.log(giftName);
      gifts = yield call(giftsAxios, `/gift/search/${giftName}`, "get");
    }
    yield put({
      type: SELECT_ALL_GIFTS,
      payload: gifts,
    }); //put은 특정 액션을 dispatch한다
  } catch (error) {
    yield put({
      type: FAILED_REQUEST,
      error: error,
    });
  }
}

function* handleGiftsView(action) {
  try {
    const id = action.data;
    console.log("view id:", id);
    yield call(giftsAxios, `/gift/${id}`, "put");
  } catch (error) {
    console.log(error);
  }
}

export function* watchGetGifts() {
  console.log("saga / watchGetGifts");
  yield takeLatest(GIFTS_REQUEST, handleSortGift); //액션에 대해서 기존에 진행 중이던 작업이 있다면 취소 처리하고 가장 마지막으로 실행된 작업에 대해서만 액션 수행
  yield takeLatest(SEARCH_REQUEST, handleSearchGifts);
  yield takeLatest(UPDATE_VIEW, handleGiftsView);
}
