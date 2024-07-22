import { createAsyncThunk } from "@reduxjs/toolkit";
import { axiosInstance } from "../../../api/axios/axiosInstance";
import { CREATE_QUOTE } from "../../../constants/api";
import { QuotePayload } from "../../../constants/types/quote";

export const createAction = createAsyncThunk(
  "quote/createQuote",
  async (
    {
      additional_items,
      date_1,
      date_2,
      dropoff_address,
      dropoff_address_property_type,
      email,
      level_of_service,
      pickup_address,
      pickup_address_property_type,
      rooms,
      user,
      when_type,
      additional_services,
      other_details,
    }: QuotePayload,
    { rejectWithValue }
  ) => {
    try {
      const config = {
        headers: {
          "Content-Type": "application/json",
        },
      };
      const { data } = await axiosInstance.post(
        CREATE_QUOTE,
        {
          additional_items,
          date_1,
          date_2,
          dropoff_address,
          dropoff_address_property_type,
          email,
          level_of_service,
          pickup_address,
          pickup_address_property_type,
          rooms,
          user,
          when_type,
          additional_services,
          other_details,
        },
        config
      );
      return data;
    } catch (error: any) {
      console.log(error.response);
      // return custom error message from backend if present
      if (error.response && error.response.data.email) {
        return rejectWithValue(error.response.data.email);
      } else {
        return rejectWithValue(error.response);
      }
    }
  }
);
