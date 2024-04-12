// features/auth/authSlice.js
import { createSlice } from '@reduxjs/toolkit'
import { RegisterWithEmailInitialState } from '../../../constants/types/auth'
import { registerWithEmailAction } from '../../actions/authAction/RegisterWithEmailAction'

const initialState:RegisterWithEmailInitialState = {
  loading: false,
  userInfo: {}, // for user object
  error: null,
  success: false, // for monitoring the registration process.
}

const registerWithEmailSlice = createSlice({
  name: 'registerEmail',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(registerWithEmailAction.pending, (state) => {
      state.loading = true;
      state.error = null;
    });
    builder.addCase(registerWithEmailAction.fulfilled, (state, action) => {
      console.log(action)
      state.loading = false;
      state.success= true;
      state.userInfo = action.payload;
    });
    builder.addCase(registerWithEmailAction.rejected, (state, action) => {
      state.loading = false;
      state.error = action.payload
      state.success= false;
    });
  },
})

export default registerWithEmailSlice.reducer