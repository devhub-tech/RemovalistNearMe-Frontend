
import { createAsyncThunk } from '@reduxjs/toolkit'
import { axiosInstance } from '../../../api/axios/axiosInstance'
import { REGISTER_EMAIL } from '../../../constants/api'
import { RegisterPayload } from '../../../constants/types/auth'


export const registerAction = createAsyncThunk(
  'auth/register',
  async ({email, password, phone_number }: RegisterPayload , { rejectWithValue }) => {
    try {
      const config = {
        headers: {
          'Content-Type': 'application/json',
        },
      }
      const {data}= await axiosInstance.post(
        REGISTER_EMAIL,
        { email, password, phone_number},
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