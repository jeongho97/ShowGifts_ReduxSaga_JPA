import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { loginApi } from "./usersApi";
const initialState = {
  isLogin: localStorage.getItem("token") === undefined ? true : false,
  me: {},
};

const LOGIN = "LOGIN";

export const login = createAsyncThunk(LOGIN, async (user, thunkAPI) => {
  const { users } = thunkAPI.getState().users;
  const isLogin = await loginApi(users, user);
  return isLogin;
});

export const usersSlice = createSlice({
  name: "users",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(login.fulfilled, (state, { payload }) => {
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
