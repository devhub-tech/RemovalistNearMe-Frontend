import React from "react";
import GetQuoteCard from "./GetQuoteCard";

const GetQuoteCards = () => {
  const serviceType: { name: string; img: string }[] = [
    {
      name: "Moving Local / Same State",
      img: "assets/img/quote/Home.png",
    },
    {
      name: "Moving Interstate",
      img: "assets/img/quote/map.png",
    },
    {
      name: "Moving Office",
      img: "assets/img/quote/office.png",
    },
    {
      name: "Moving a Single Item",
      img: "assets/img/quote/box.png",
    },
    {
      name: "Moving a few Item",
      img: "assets/img/quote/trolley.png",
    },
    {
      name: "Moving a Piano",
      img: "assets/img/quote/piano.png",
    },
    {
      name: "Moving a Pool Table",
      img: "assets/img/quote/pooltable.png",
    },
    {
      name: "Gumtree/Ebay Pickups",
      img: "assets/img/quote/fragile.png",
    },
    {
      name: "Moving Fragile Items",
      img: "assets/img/quote/fragile.png",
    },
    {
      name: "Rubbish Removal",
      img: "assets/img/quote/trash.png",
    },
  ];
  return (
    <div className="container pd-top-115 pd-bottom-90">
      <div className="row">
        <div className="row justify-content-center">
          <div className="col-lg-6">
            <div className="section-title text-center">
              <h5 className="subtitle">GET QUOTE</h5>
              <h2 className="title">SELECT SERVICE TYPE</h2>
              <p className="content mt-2">
                Please select the service type that you wish to receive quotes
                for
              </p>
            </div>
          </div>
        </div>
        {serviceType.map((item, index) => {
          return (
            <div key={index} className="col-3 my-3">
              <GetQuoteCard item={item.name} img={item.img} />
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default GetQuoteCards;
