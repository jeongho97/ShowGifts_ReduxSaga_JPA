import { customAxios } from "../http/CustomAxios";
export const loginApi = async (user) => {
  console.log(user);
  //const newUser = { ...user, userId: user.id, id: null };
  //Spring boot의 UserDto에 선언된 것고 이름이 달라서 변경해준것임 이를 피하기 위해선 처음부터 Login 페이지에서
  //State에 담을때 UserDto와 이름을 갖게 하면 된다.
  //console.log(newUser);

  const response_data = await customAxios("/user/login", "post", user);
  console.log(response_data.token);
  console.log(response_data);
  return { isLogin: response_data.token ? true : false, user: response_data };
};
