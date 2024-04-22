import React, { useRef, useState } from "react";
import { FaCalculator, FaMobileAlt, FaSignInAlt } from "react-icons/fa";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { AppDispatch, RootState } from "../redux/store/store";
import { RegisterWithEmailPayload } from "../constants/types/auth";
import { registerWithEmailAction } from "../redux/actions/authAction/RegisterWithEmailAction";

const Signup = () => {
  const dispatch = useDispatch<AppDispatch>();
  const { error, loading, success, userInfo } = useSelector(
    (state: RootState) => state.registerEmail
  );

  console.log(error, loading, success, userInfo);
  const formRef = useRef<HTMLFormElement>(null);

  function handleSumbit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    if (formRef.current) {
      const formData = new FormData(formRef.current);
      const email = formData.get("email") as string;
      const password = formData.get("password") as string;
      const payload: RegisterWithEmailPayload = {
        email: email,
        password: password,
        registration_method: "email",
      };
      dispatch(registerWithEmailAction(payload));
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
              <h3>CREATE AN ACCOUNT</h3>
              <div className="row">
                <div className="col-md-12">
                  <div className="single-input-inner">
                    <label>
                      <FaSignInAlt />
                    </label>
                    <input
                      type="text"
                      placeholder="Your Email Address"
                      name="email"
                    />
                  </div>
                </div>
                <div className="col-md-12">
                  <div className="single-input-inner">
                    <label>
                      <FaMobileAlt />
                    </label>
                    <input
                      type="text"
                      placeholder="Your Phone Number"
                      name="number"
                    />
                  </div>
                </div>
                <div className="row">
                  <div className="col-md-2">
                    <div className="single-input-inner">
                      <input type="text" name="number" />
                    </div>
                  </div>
                  <div className="col-md-2">
                    <div className="single-input-inner">
                      <input type="text" name="number" />
                    </div>
                  </div>
                  <div className="col-md-2">
                    <div className="single-input-inner">
                      <input type="text" name="number" />
                    </div>
                  </div>
                  <div className="col-md-2">
                    <div className="single-input-inner">
                      <input type="text" name="number" />
                    </div>
                  </div>
                  <div className="col-md-2">
                    <div className="single-input-inner">
                      <input type="text" name="number" />
                    </div>
                  </div>
                  <div className="col-md-2">
                    <div className="single-input-inner">
                      <input type="text" name="number" />
                    </div>
                  </div>
                </div>

                <div className="col-md-12">
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
                  <Link to="/signup">Already have an account?</Link>
                  <p>Forgot Password?</p>
                </div>
                <div className="col-10">
                  <button className="btn btn-base" type="submit">
                    {" "}
                    SIGNUP
                  </button>
                </div>
              </div>
            </form>
          </div>
          <div className="col-lg-5">
            <img
              className="auth_img"
              src="assets/img/auth/auth-two.jpg"
              alt=""
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Signup;
