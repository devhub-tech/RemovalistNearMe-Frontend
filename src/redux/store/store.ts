import { configureStore } from "@reduxjs/toolkit";
import registerWithEmailReducer from "../slice/authSlice/RegisterWithEmailSlice"
import loginReducer from "../slice/authSlice/LoginSlice"
import sendOtpReducer from "../slice/authSlice/SendOtpSlice"
import verifyOtpReducer from "../slice/authSlice/VerifyOtpSlice"
const store = configureStore({
  reducer: {
    registerEmail: registerWithEmailReducer,
    login: loginReducer,
    sendOtp: sendOtpReducer,
    verifyOtp: verifyOtpReducer,
  },
});
// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch
export default store;
