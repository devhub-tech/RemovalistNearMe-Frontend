
import { createAsyncThunk } from '@reduxjs/toolkit'
import { SendOtpPayload } from '../../../constants/types/auth'
import { axiosInstance } from '../../../api/axios/axiosInstance'
import { SEND_OTP } from '../../../constants/api'


export const SendOtpAction = createAsyncThunk(
  'auth/sendOtp',
  async ({phone_number}: SendOtpPayload , { rejectWithValue }) => {
    try {
      const config = {
        headers: {
          'Content-Type': 'application/json',
        },
      }
      const {data}= await axiosInstance.post(
        SEND_OTP,
        {phone_number},
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