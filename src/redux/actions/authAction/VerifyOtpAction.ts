
import { createAsyncThunk } from '@reduxjs/toolkit'
import { VerifyOtpPayload } from '../../../constants/types/auth'
import { axiosInstance } from '../../../api/axios/axiosInstance'
import { VERIFY_OTP } from '../../../constants/api'


export const verifyOtpAction = createAsyncThunk(
  'auth/verfiyOtp',
  async ({phone_number,otp}: VerifyOtpPayload , { rejectWithValue }) => {
    console.log(phone_number,otp)
    try {
      const config = {
        headers: {
          'Content-Type': 'application/json',
        },
      }
      const {data}= await axiosInstance.post(
        VERIFY_OTP,
        {phone_number,otp},
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