import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { Alert, Button, Col, Container, Form, Input, Row } from "reactstrap";
import { login } from "../../store/users";
import "./Login.css";
const Login = () => {
  const dispatch = useDispatch();

  const me = useSelector((state) => state.users.me); //리듀서에서 변경한 state값에 있는 me를 사용하기 위해서는 useSelector를 사용하자!
  console.log(me);

  const [isFail, setIsFail] = useState(false);
  //state에 담을때 변수 명을 Back의 UserDto와 맞춰주자
  //Back과 Front를 서로 다른 사람이 개발을 할때 Front 개발자는 Swagger를 통해 Back단에서 변수명이
  //어떻게 설정되어있는지 확인하고 맞춰주자
  const [user, setUser] = useState({
    userId: "",
    password: "",
  });
  const onChangeHandler = (e) => {
    const { name, value } = e.target;
    setUser({ ...user, [name]: value }); //...user : props의 값들을 한번에 담아 보낸다
  };
  const navigate = useNavigate(); //페이지를 리다이렉트 할때 사용
  const onSubmitLogin = async (e) => {
    e.preventDefault(); //a 태그나 submit 태그는 누르게 되면 href 를 통해 이동하거나 , 창이 새로고침하여 실행됩니다.
    // preventDefault 를 통해 이러한 동작을 막아줄 수 있습니다.
    const { me } = await dispatch(login(user)).unwrap();

    const { isLogin } = await dispatch(login(user)).unwrap(); //unwrap 리턴값을 받으려고 사용 store에 users.js의 login 액션 수행해라!
    //Login.js->user.js(액션->usersApi(Spring boot->DB)->리듀서(state업데이트))->Login.js
    //isLogin은 action의 반환값이다.
    console.log(isLogin);
    if (isLogin) {
      navigate("/paper");
    } else {
      setIsFail(true);
      setTimeout(() => closeAlert(), 3000);
    }
  };

  const closeAlert = () => {
    setIsFail(false);
  };
  return (
    <div className="LoginPage">
      <Container className="bg-light border">
        <Row style={{ rowGap: "1em", padding: "3em" }}>
          <Col xl={12}>
            <img
              src="https://www.instagram.com/static/images/web/logged_out_wordmark-2x.png/d2529dbef8ed.png"
              alt="Logo"
            ></img>
          </Col>

          <Col xl={12}>
            <Form onSubmit={onSubmitLogin} className="LoginForm">
              {isFail ? (
                <Alert color="warning" toggle={() => closeAlert()}>
                  아이디 또는 비밀번호가 틀렸습니다.
                </Alert>
              ) : null}
              <Input
                type="text"
                placeholder="ID"
                name="userId"
                onChange={(e) => onChangeHandler(e)}
              ></Input>
              <Input
                type="password"
                placeholder="password"
                name="password"
                onChange={(e) => onChangeHandler(e)}
              ></Input>
              <Button type={"submit"} color="primary" block>
                로그인
              </Button>
            </Form>
          </Col>
        </Row>
      </Container>
      <Container className="bg-light border">
        <Row style={{ padding: "1em", textAlign: "center" }}>
          <p>
            계정이 없으신가요? <a href="/join">가입하기</a>
          </p>
        </Row>
      </Container>
    </div>
  );
};
export default Login;
