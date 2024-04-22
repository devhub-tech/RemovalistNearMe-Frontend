// features/auth/authSlice.js
import { createSlice } from '@reduxjs/toolkit'
import { LoginInitialState} from '../../../constants/types/auth'
import { registerWithEmailAction } from '../../actions/authAction/RegisterWithEmailAction'

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
    builder.addCase(registerWithEmailAction.pending, (state) => {
      state.loading = true;
      state.error = null;
    });
    builder.addCase(registerWithEmailAction.fulfilled, (state, action) => {
      console.log(action)
      state.loading = false;
      state.success= true;
      state.token = action.payload.token;
      state.userInfo=action.payload.user
    });
    builder.addCase(registerWithEmailAction.rejected, (state, action) => {
      state.loading = false;
      state.error = action.payload
      state.success= false;
    });
  },
})

export default loginSlice.reducer