import "./style.scss";
import LoginForm from "../../components/login/LoginForm";
import LoginHead from "./../../components/login/LoginHead";
export default function Login() {
  return (
    <div className="login">
      <div className="login_wrapper">
        <div className="login_wrapper_wrap">
          <div className="login_wrapper_wrap_head">
            <LoginHead />
          </div>
          <div className="login_wrapper_wrap_body">
            <LoginForm />
          </div>
        </div>
      </div>
    </div>
  );
}
