import React, { useState } from "react";
import { AppDispatch, RootState } from "../redux/store/store";
import { useDispatch, useSelector } from "react-redux";
import { SendOtpAction } from "../redux/actions/authAction/SendOtpAction";
import { SendOtpPayload } from "../constants/types/auth";
function SignUpForm() {
  const dispatch = useDispatch<AppDispatch>();
  const { error, loading, success, data } = useSelector(
    (state: RootState) => state.sendOtp
  );

  console.log(error, loading, success, data);
  const [isVerified, setIsVerified] = useState<boolean>(false);
  const [state, setState] = useState({
    phone: "",
    email: "",
    password: "",
    otp1: "",
    otp2: "",
    otp3: "",
    otp4: "",
    otp5: "",
    otp6: "",
  });

  const handleChange = (evt) => {
    const value = evt.target.value;
    setState({
      ...state,
      [evt.target.name]: value,
    });
  };

  const handleOnSubmit = (evt) => {
    evt.preventDefault();
  };

  function handleSendOtp() {
    if (state.phone) {
      const payload: SendOtpPayload = {
        phone_number: state.phone,
      };
      dispatch(SendOtpAction(payload));
    }
  }

  // function verfi(params:type) {

  // }

  return (
    <div className="form-container sign-up-container">
      <form onSubmit={handleOnSubmit}>
        <h1 className="h1_auth">Create Account</h1>
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
        <span className="span_auth">or use your email for registration</span>
        <div style={{ width: "100%" }}>
          <input
            className="auth_input"
            type="text"
            name="phone"
            value={state.phone}
            onChange={handleChange}
            placeholder="Enter your phone number"
          />
          <p onClick={handleSendOtp} className="auth_verify_otp">
            Send OTP
          </p>
        </div>

        <div className="flex_container">
          <input
            className="auth_input"
            type="text"
            name="otp1"
            maxLength={1}
            value={state.otp1}
            onChange={handleChange}
          />
          <input
            className="auth_input"
            type="text"
            name="otp2"
            maxLength={1}
            value={state.otp2}
            onChange={handleChange}
          />
          <input
            className="auth_input"
            type="text"
            name="otp3"
            maxLength={1}
            value={state.otp3}
            onChange={handleChange}
          />
          <input
            className="auth_input"
            type="text"
            name="otp4"
            maxLength={1}
            value={state.otp4}
            onChange={handleChange}
          />
          <input
            className="auth_input"
            type="text"
            name="otp5"
            maxLength={1}
            value={state.otp5}
            onChange={handleChange}
          />
          <input
            className="auth_input"
            type="text"
            name="otp6"
            maxLength={1}
            value={state.otp6}
            onChange={handleChange}
          />
        </div>

        {isVerified && (
          <input
            className="auth_input"
            type="text"
            name="email"
            value={state.email}
            onChange={handleChange}
            placeholder="Enter your email address"
          />
        )}
        {isVerified && (
          <input
            className="auth_input"
            type="password"
            name="password"
            value={state.password}
            onChange={handleChange}
            placeholder="Enter your password"
          />
        )}
        <br />
        <button className="auth_btn">
          {isVerified ? "Sign Up" : "Verify OTP"}
        </button>
      </form>
    </div>
  );
}

export default SignUpForm;
