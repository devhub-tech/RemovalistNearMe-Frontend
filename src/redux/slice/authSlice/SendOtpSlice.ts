// features/auth/authSlice.js
import { createSlice } from '@reduxjs/toolkit'
import { SendOtpState} from '../../../constants/types/auth'
import { registerWithEmailAction } from '../../actions/authAction/RegisterWithEmailAction'
import { SendOtpAction } from '../../actions/authAction/SendOtpAction'

const initialState:SendOtpState = {
  loading: false,
  data: "",
  error: null,
  success: false, // for monitoring the registration process.
}

const sendOtpSlice = createSlice({
  name: 'SendOtp',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(SendOtpAction.pending, (state) => {
      state.loading = true;
      state.error = null;
    });
    builder.addCase(SendOtpAction.fulfilled, (state, action) => {
      console.log(action)
      state.loading = false;
      state.data= action.payload
      state.success= true;

    });
    builder.addCase(SendOtpAction.rejected, (state, action) => {
      state.loading = false;
      state.error = action.payload
      state.success= false;
    });
  },
})

export default sendOtpSlice.reducer