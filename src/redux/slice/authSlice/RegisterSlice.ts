// features/auth/authSlice.js
import { createSlice } from '@reduxjs/toolkit'
import { RegisterInitialState } from '../../../constants/types/auth'
import { registerAction } from '../../actions/authAction/RegisterAction'

const initialState:RegisterInitialState = {
  loading: false,
  userInfo: {}, // for user object
  error: null,
  success: false, // for monitoring the registration process.
}

const registerSlice = createSlice({
  name: 'register',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(registerAction.pending, (state) => {
      state.loading = true;
      state.error = null;
    });
    builder.addCase(registerAction.fulfilled, (state, action) => {
      console.log(action)
      state.loading = false;
      state.success= true;
      state.userInfo = action.payload;
    });
    builder.addCase(registerAction.rejected, (state, action) => {
      state.loading = false;
      state.error = action.payload
      state.success= false;
    });
  },
})

export default registerSlice.reducer