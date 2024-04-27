import React, { useState } from "react";
import { AppDispatch, RootState } from "../redux/store/store";
import { useDispatch, useSelector } from "react-redux";
import { ClipLoader } from "react-spinners";
function SignInForm() {
  const dispatch = useDispatch<AppDispatch>();
  const { error, loading, success, token, userInfo } = useSelector(
    (state: RootState) => state.login
  );

  const [state, setState] = React.useState({
    email: "",
    password: "",
  });
  const [errors, setErrors] = React.useState({
    emailError: "",
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
    if (!state.email || !state.password) {
      setErrors((prevState) => ({
        emailError: state.email ? "" : "Email cannot be empty",
        passwordError: state.password ? "" : "Password cannot be empty",
      }));
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
          className={`auth_input ${errors.emailError}`}
          type="email"
          placeholder="Enter email or phone number"
          name="email"
          value={state.email}
          onChange={handleChange}
        />
        {errors.emailError ? (
          <span className="span_auth error_auth">{errors.emailError}</span>
        ) : (
          ""
        )}
        <input
          className="auth_input"
          type="password"
          name="password"
          placeholder="Enter password"
          value={state.password}
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
