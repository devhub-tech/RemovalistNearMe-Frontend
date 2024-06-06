import React, { useState } from "react";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import "./DateRange.module.sass";

const DateRange = ({ startDate, setDateRange, endDate }) => {
  return (
    <DatePicker
      popperPlacement="top-end"
      placeholderText="Select date range"
      closeOnScroll={true}
      selectsRange={true}
      startDate={startDate}
      endDate={endDate}
      onChange={(update) => {
        setDateRange(update);
      }}
      dateFormat="MMMM d, yyyy"
    />
  );
};

export default DateRange;
