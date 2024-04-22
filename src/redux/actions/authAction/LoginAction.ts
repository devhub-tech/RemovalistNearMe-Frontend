
import { createAsyncThunk } from '@reduxjs/toolkit'
import { LoginPayload } from '../../../constants/types/auth'
import { axiosInstance } from '../../../api/axios/axiosInstance'
import { LOGIN, REGISTER_EMAIL } from '../../../constants/api'


export const LoginAction = createAsyncThunk(
  'auth/register',
  async ({username, password }: LoginPayload , { rejectWithValue }) => {
    try {
      const config = {
        headers: {
          'Content-Type': 'application/json',
        },
      }
      const {data}= await axiosInstance.post(
        LOGIN,
        { username, password},
        config
      )
      return data
    } catch (error:any) {
      console.log(error.response.data.message)
    // return custom error message from backend if present
      if (error.response && error.response.data.message) {
        return rejectWithValue(error.response.data.message)
      } else {
        return rejectWithValue(error.message)
      }
    }
  }   
)