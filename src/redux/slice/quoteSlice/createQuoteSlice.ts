// features/auth/authSlice.js
import { createSlice } from "@reduxjs/toolkit";
import { QuoteInitialState } from "../../../constants/types/quote";
import { createQuoteAction } from "../../actions/quoteAction/createQuoteAction";

const initialState: QuoteInitialState = {
  loading: false,
  info: {}, // for user object
  error: null,
  success: false, // for monitoring the registration process.
};

const createQuoteSlice = createSlice({
  name: "createQuote",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(createQuoteAction.pending, (state) => {
      state.loading = true;
      state.error = null;
    });
    builder.addCase(createQuoteAction.fulfilled, (state, action) => {
      console.log(action);
      state.loading = false;
      state.success = true;
      state.info = action.payload;
    });
    builder.addCase(createQuoteAction.rejected, (state, action) => {
      state.loading = false;
      state.error = action.payload;
      state.success = false;
    });
  },
});

export default createQuoteSlice.reducer;
