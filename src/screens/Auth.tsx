import React, { useEffect, useState } from "react";
import SignInForm from "../components/SignInForm";
import SignUpForm from "../components/SignUpForm";
import { useSelector } from "react-redux";
import { RootState } from "../redux/store/store";

export default function App() {
  const {
    // error: registerError,
    // loading: registerLoading,
    success: registerSuccess,
    // userInfo,
  } = useSelector((state: RootState) => state.registerEmail);
  const [type, setType] = useState<string>("signIn");
  const handleOnClick = (text) => {
    if (text !== type) {
      setType(text);
      return;
    }
  };
  const containerClass =
    "container " + (type === "signUp" ? "right-panel-active" : "");

  useEffect(() => {
    if (registerSuccess) {
      setType("signIn");
    }
  }, [registerSuccess]);

  return (
    <div className="App">
      <div className={containerClass} id="container">
        <SignUpForm type={type} setType={setType} />
        <SignInForm type={type} setType={setType} />
        <div className="overlay-container">
          <div className="overlay">
            <div className="overlay-panel overlay-left">
              <h1 className="h1_auth white">Welcome Back!</h1>
              <p className="auth_para white">
                To keep connected with us please login with your personal info
              </p>
              <button
                className="auth_btn ghost"
                id="signIn"
                onClick={() => handleOnClick("signIn")}
              >
                Login
              </button>
            </div>
            <div className="overlay-panel overlay-right">
              <h1 className="h1_auth white">Hello, Friend!</h1>
              <p className="auth_para white">
                Enter your personal details and start journey with us
              </p>
              <button
                className="auth_btn ghost"
                id="signUp"
                onClick={() => handleOnClick("signUp")}
              >
                Sign Up
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
