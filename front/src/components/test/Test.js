import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";

const Test = () => {
  const navigate = useNavigate();
  const onSubmitLogin = async (e) => {
    navigate("/gift");
  };
  return (
    <div>
      <form onSubmit={onSubmitLogin} className="LoginForm">
        <button type={"submit"} color="primary" block>
          선물보기
        </button>
      </form>
    </div>
  );
};

export default Test;
