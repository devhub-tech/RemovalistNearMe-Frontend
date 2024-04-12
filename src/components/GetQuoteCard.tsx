import React from "react";

const GetQuoteCard = ({ item, img }) => {
  return (
    <div className="quote_card">
      <img src={img} alt="Removalist" />
      <span>{item}</span>
    </div>
  );
};

export default GetQuoteCard;
