import { configureStore, combineReducers } from "@reduxjs/toolkit";

import users from "./users";

const reducer = combineReducers({
  //루트 reducer에 리듀서 정의
  users,
});
export default configureStore({
  reducer,
  devTools: true,
  middleware: (getDefaultMiddleware) => [...getDefaultMiddleware()],
});
