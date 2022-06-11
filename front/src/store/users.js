import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { loginApi } from "./usersApi";
const initialState = {
  isLogin: localStorage.getItem("token") === undefined ? true : false,
  me: {},
};

//액션 정의
const LOGIN = "LOGIN";

//액션 함수
export const login = createAsyncThunk(LOGIN, async (user) => {
  console.log(user);
  const isLogin = await loginApi(user);
  return isLogin;
});

//리듀서
export const usersSlice = createSlice({
  name: "users", //루트 리듀서에 정의한 이름
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(login.fulfilled, (state, { payload }) => {
      //payload에는 액션의 정보들이 담겨져 있다
      //따라서 액션 함수에서 return되는 isLogin 값과 loginApi에서 반환한 user값 또한 가지고 있다.
      console.log(payload);
      console.log(state);
      if (payload.isLogin) {
        localStorage.setItem("token", payload.user.token);
        return {
          ...state,
          isLogin: payload.login,
          me: payload.user,
        };
      } else {
        return { ...state, isLogin: false };
      }
    });
  },
});
export default usersSlice.reducer;
