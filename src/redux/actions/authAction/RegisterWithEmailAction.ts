
import { createAsyncThunk } from '@reduxjs/toolkit'
import { RegisterWithEmailPayload } from '../../../constants/types/auth'
import { axiosInstance } from '../../../api/axios/axiosInstance'
import { REGISTER_EMAIL } from '../../../constants/api'


export const registerWithEmailAction = createAsyncThunk(
  'auth/register',
  async ({email, password, registration_method }: RegisterWithEmailPayload , { rejectWithValue }) => {
    try {
      const config = {
        headers: {
          'Content-Type': 'application/json',
        },
      }
      const {data}= await axiosInstance.post(
        REGISTER_EMAIL,
        { email, password, registration_method},
        config
      )
      return data
    } catch (error:any) {
      console.log(error.response)
    // return custom error message from backend if present
      if (error.response && error.response.data.email) {
        return rejectWithValue(error.response.data.email)
      } else {
        return rejectWithValue(error.response)
      }
    }
  }   
)