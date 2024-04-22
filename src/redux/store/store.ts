import { configureStore } from "@reduxjs/toolkit";
import clickActionReducer from "../stateSlice/clickActionSlice";
import registerWithEmailReducer from "../slice/authSlice/RegisterWithEmailSlice"
import loginReducer from "../slice/authSlice/LoginSlice"
const store = configureStore({
  reducer: {
    clickAction: clickActionReducer,
    registerEmail: registerWithEmailReducer,
    login: loginReducer
  },
});
// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch
export default store;
