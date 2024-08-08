import React, { useEffect, useState } from "react";
import { AppDispatch, RootState } from "../redux/store/store";
import { useDispatch, useSelector } from "react-redux";
import { SendOtpAction } from "../redux/actions/authAction/SendOtpAction";
import {
  RegisterPayload,
  SendOtpPayload,
  VerifyOtpPayload,
} from "../constants/types/auth";
import { verifyOtpAction } from "../redux/actions/authAction/VerifyOtpAction";
import { registerAction } from "../redux/actions/authAction/RegisterAction";
import { ClipLoader } from "react-spinners";

function SignUpForm({
  type,
  setType,
}: {
  type: string;
  setType: React.Dispatch<React.SetStateAction<string>>;
}) {
  const dispatch = useDispatch<AppDispatch>();
  const {
    error: errorSendOtp,
    loading: loadingSendOtp,
    success: successSendOtp,
    data: dataSendOtp,
  } = useSelector((state: RootState) => state.sendOtp);

  const {
    error: errorVerifyOtp,
    loading: loadingVerifyOtp,
    success: successVerifyOtp,
    data: dataVerifyOtp,
  } = useSelector((state: RootState) => state.verifyOtp);

  const {
    error: registerError,
    loading: registerLoading,
    success: registerSuccess,
    userInfo,
  } = useSelector((state: RootState) => state.registerEmail);

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

  useEffect(() => {
    if (dataVerifyOtp) {
      setIsVerified(true);
    }
  }, [dataVerifyOtp]);

  useEffect(() => {
    if (type === "signIn") {
      setIsVerified(false);
      setState((prevState) => ({
        email: "",
        phone: "",
        password: "",
        otp1: "",
        otp2: "",
        otp3: "",
        otp4: "",
        otp5: "",
        otp6: "",
      }));
    }
  }, [type]);

  const handleChange = (evt) => {
    const value = evt.target.value;
    setState({
      ...state,
      [evt.target.name]: value,
    });
  };

  const handleOnSubmit = (evt: React.FormEvent<HTMLFormElement>) => {
    // evt.preventDefault();
    // if (!isVerified && state.phone) {
    //   const payload: VerifyOtpPayload = {
    //     phone_number: state.phone,
    //     otp:
    //       state.otp1 +
    //       state.otp2 +
    //       state.otp3 +
    //       state.otp4 +
    //       state.otp5 +
    //       state.otp6,
    //   };
    //   dispatch(verifyOtpAction(payload));
    // } else {
    //   const payload: RegisterPayload = {
    //     email: state.email,
    //     password: state.password,
    //     phone_number: state.phone,
    //   };
    //   console.log(payload);
    //   dispatch(registerAction(payload));
    // }
  };

  function handleSendOtp() {
    // if (state.phone) {
    //   const payload: SendOtpPayload = {
    //     phone_number: state.phone,
    //   };
    //   dispatch(SendOtpAction(payload));
    // }
  }

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
        <span className="span_auth">
          or use your email and phone for registration
        </span>
        {isVerified === false && (
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
              {loadingSendOtp ? (
                <ClipLoader color="white" size={14} />
              ) : (
                "Send OTP"
              )}
            </p>
          </div>
        )}

        {isVerified === false && (
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
        )}

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
          {loadingVerifyOtp || registerLoading ? (
            <ClipLoader color="white" size={14} />
          ) : isVerified ? (
            "Sign up"
          ) : (
            "Verify OTP"
          )}
        </button>
      </form>
    </div>
  );
}

export default SignUpForm;
