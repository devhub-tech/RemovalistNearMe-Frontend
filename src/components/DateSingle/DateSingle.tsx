import React, { useState } from "react";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import "./DateSingle.module.sass";

const DateSingle = ({ startDate, setStartDate }) => {
  return (
    <DatePicker
      popperPlacement="top-end"
      closeOnScroll={true}
      selected={startDate}
      onChange={(date) => setStartDate(date)}
      dateFormat="MMMM d, yyyy"
    />
  );
};

export default DateSingle;
