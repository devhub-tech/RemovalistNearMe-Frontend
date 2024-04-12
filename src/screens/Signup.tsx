import React from "react";
import { FaCalculator, FaSignInAlt } from "react-icons/fa";
import { Link } from "react-router-dom";

const Signup = () => {
  return (
    <div className="container">
      <div className="contact-area mg-top-120 mb-120">
        <div className="row g-0 justify-content-center">
          <div className="col-lg-7">
            <form
              className="contact-form text-center"
              // ref={form}
              // onSubmit={sendEmail}
            >
              <h3>CREATE AN ACCOUNT</h3>
              <div className="row">
                <div className="col-md-10">
                  <div className="single-input-inner">
                    <label>
                      <FaSignInAlt />
                    </label>
                    <input
                      type="text"
                      placeholder="Your Email Address"
                      name="emailOrPhone"
                    />
                  </div>
                </div>

                <div className="col-md-10">
                  <div className="single-input-inner">
                    <label>
                      <FaCalculator />
                    </label>
                    <input type="password" placeholder="Your Password" />
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
