// features/auth/authSlice.js
import { createSlice } from '@reduxjs/toolkit'
import { VerifyOtpState} from '../../../constants/types/auth'
import { verifyOtpAction } from '../../actions/authAction/VerifyOtpAction'

const initialState:VerifyOtpState = {
  loading: false,
  data: "",
  error: null,
  success: false, // for monitoring the registration process.
}

const verifyOtpSlice = createSlice({
  name: 'VerifyOtp',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(verifyOtpAction.pending, (state) => {
      state.loading = true;
      state.error = null;
    });
    builder.addCase(verifyOtpAction.fulfilled, (state, action) => {
      console.log(action)
      state.loading = false;
      state.data= action.payload
      state.success= true;

    });
    builder.addCase(verifyOtpAction.rejected, (state, action) => {
      state.loading = false;
      state.error = action.payload
      state.success= false;
    });
  },
})

export default verifyOtpSlice.reducer