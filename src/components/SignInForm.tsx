import React, { useState, useEffect } from "react";
import { AppDispatch, RootState } from "../redux/store/store";
import { useDispatch, useSelector } from "react-redux";
import { ClipLoader } from "react-spinners";
import { LoginPayload } from "../constants/types/auth";
import { LoginAction } from "../redux/actions/authAction/LoginAction";

function SignInForm({
  type,
  setType,
}: {
  type: string;
  setType: React.Dispatch<React.SetStateAction<string>>;
}) {
  const dispatch = useDispatch<AppDispatch>();
  const { error, loading, success, token, userInfo } = useSelector(
    (state: RootState) => state.login
  );

  const [state, setState] = React.useState({
    username: "",
    password: "",
  });
  useEffect(() => {
    if (type === "signUp") {
      setState((prevState) => ({
        username: "",
        password: "",
      }));
    }
  }, [type]);

  const [errors, setErrors] = React.useState({
    usernameError: "",
    passwordError: "",
  });
  const handleChange = (evt) => {
    const value = evt.target.value;
    setState({
      ...state,
      [evt.target.name]: value,
    });
  };

  const handleOnSubmit = (evt: React.FormEvent<HTMLFormElement>) => {
    evt.preventDefault();
    if (!state.username || !state.password) {
      // setErrors((prevState) => ({
      //   usernameError: state.username ? "" : "Email cannot be empty",
      //   passwordError: state.password ? "" : "Password cannot be empty",
      // }));
    } else {
      const payload: LoginPayload = {
        username: state.username,
        password: state.password,
      };
      dispatch(LoginAction(payload));
    }
  };

  return (
    <div className="form-container sign-in-container">
      <form onSubmit={handleOnSubmit}>
        <h1 className="h1_auth">Login</h1>
        {/* <div className="social-container">
          <a href="#" className="a_auth">
            <i className="fab fa-facebook-f" />
          </a>
          <a href="#" className="a_auth">
            <i className="fab fa-google-plus-g" />
          </a>
          <a href="#" className="a_auth">
            <i className="fab fa-linkedin-in" />
          </a>
        </div> */}
        <span className="span_auth">or use your account</span>

        <input
          className={`auth_input ${errors.usernameError}`}
          type="text"
          placeholder="Enter email or phone number"
          name="username"
          value={state.username || ""}
          onChange={handleChange}
        />
        {errors.usernameError ? (
          <span className="span_auth error_auth">{errors.usernameError}</span>
        ) : (
          ""
        )}
        <input
          className="auth_input"
          type="password"
          name="password"
          placeholder="Enter password"
          value={state.password || ""}
          onChange={handleChange}
        />
        {errors.passwordError ? (
          <span className="span_auth error_auth">{errors.passwordError}</span>
        ) : (
          ""
        )}
        <a className="a_auth" href="#">
          Forgot your password?
        </a>
        <button className="auth_btn">
          {loading ? (
            <ClipLoader
              size={20}
              aria-label="Loading Spinner"
              data-testid="loader"
            />
          ) : (
            "SIGN IN"
          )}
        </button>
      </form>
    </div>
  );
}

export default SignInForm;
