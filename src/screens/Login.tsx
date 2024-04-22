import React, { useRef } from "react";
import {
  FaCalculator,
  FaFileAlt,
  FaMapMarkerAlt,
  FaPencilAlt,
  FaPhoneAlt,
  FaRegEnvelope,
  FaUserAlt,
  FaSignInAlt,
} from "react-icons/fa";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { AppDispatch, RootState } from "../redux/store/store";
import { LoginPayload } from "../constants/types/auth";
import { LoginAction } from "../redux/actions/authAction/LoginAction";

const Login = () => {
  const dispatch = useDispatch<AppDispatch>();
  const { error, loading, success, token, userInfo } = useSelector(
    (state: RootState) => state.login
  );

  console.log(error, loading, success, userInfo, token);
  const formRef = useRef<HTMLFormElement>(null);

  function handleSumbit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    if (formRef.current) {
      const formData = new FormData(formRef.current);
      const username = formData.get("username") as string;
      const password = formData.get("password") as string;
      const payload: LoginPayload = {
        username: username,
        password: password,
      };
      dispatch(LoginAction(payload));
    }
  }
  return (
    <div className="container">
      <div className="contact-area mg-top-120 mb-120">
        <div className="row g-0 justify-content-center">
          <div className="col-lg-7">
            <form
              className="contact-form text-center"
              ref={formRef}
              onSubmit={handleSumbit}
            >
              <h3>SIGN IN</h3>
              <div className="row">
                <div className="col-md-10">
                  <div className="single-input-inner">
                    <label>
                      <FaSignInAlt />
                    </label>
                    <input
                      type="text"
                      placeholder="Your Email Address or Phone Number"
                      name="username"
                    />
                  </div>
                </div>

                <div className="col-md-10">
                  <div className="single-input-inner">
                    <label>
                      <FaCalculator />
                    </label>
                    <input
                      type="password"
                      placeholder="Your Password"
                      name="password"
                    />
                  </div>
                </div>
                <div className="col-md-10 auth_flex my-1 mb-5">
                  <Link to="/signup">Don't have an account?</Link>
                  <p>Forgot Password?</p>
                </div>
                <div className="col-10">
                  <button className="btn btn-base" type="submit">
                    {" "}
                    LOGIN
                  </button>
                </div>
              </div>
            </form>
          </div>
          <div className="col-lg-5">
            <img
              className="auth_img"
              src="assets/img/auth/auth-one.jpg"
              alt=""
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
