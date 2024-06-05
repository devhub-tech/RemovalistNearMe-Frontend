import { configureStore } from "@reduxjs/toolkit";
import registerReducer from "../slice/authSlice/RegisterSlice"
import loginReducer from "../slice/authSlice/LoginSlice"
import sendOtpReducer from "../slice/authSlice/SendOtpSlice"
import verifyOtpReducer from "../slice/authSlice/VerifyOtpSlice"
const store = configureStore({
  reducer: {
    registerEmail: registerReducer,
    login: loginReducer,
    sendOtp: sendOtpReducer,
    verifyOtp: verifyOtpReducer,
  },
  middleware: (getDefaultMiddleware) => getDefaultMiddleware(
    {serializableCheck: false}
  ),
});
// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch
export default store;
