// features/auth/authSlice.js
import { createSlice } from '@reduxjs/toolkit'
import { LoginInitialState} from '../../../constants/types/auth'
import { registerAction } from '../../actions/authAction/RegisterAction'
import { LoginAction } from '../../actions/authAction/LoginAction'

const initialState:LoginInitialState = {
  loading: false,
  token: "", // for user object
  userInfo: {},
  error: null,
  success: false, // for monitoring the registration process.
}

const loginSlice = createSlice({
  name: 'Login',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(LoginAction.pending, (state) => {
      state.loading = true;
      state.error = null;
    });
    builder.addCase(LoginAction.fulfilled, (state, action) => {
      console.log(action)
      state.loading = false;
      state.success= true;
      state.token = action.payload.token;
      state.userInfo=action.payload.user
      localStorage.setItem("token" , action.payload.token)
    });
    builder.addCase(LoginAction.rejected, (state, action) => {
      state.loading = false;
      state.error = action.payload
      state.success= false;
    });
  },
})

export default loginSlice.reducer