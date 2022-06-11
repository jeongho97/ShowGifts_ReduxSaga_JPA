import axios from "axios";
import { customAxios } from "../http/CustomAxios";
export const loginApi = async (users, user) => {
  console.log(user);
  const newUser = { ...user, userId: user.id, id: null };
  console.log(newUser);

  const response_data = await customAxios("/user/login", "post", newUser);
  console.log(response_data.token);
  return { isLogin: response_data.token ? true : false, user: response_data };
};
