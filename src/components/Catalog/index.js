import React from "react";
import cn from "classnames";
import styles from "./Catalog.module.sass";
import Destination from "../Destination/index";

const Catalog = ({ items }) => {
  return (
    <div className={cn("section", styles.section)}>
      <div className={cn("container", styles.container)}>
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
        <div className={styles.list}>
          {items.map((x, index) => (
            <Destination className={styles.destination} item={x} key={index} />
          ))}
        </div>
        {/* <button className={cn("button-stroke", styles.button)}>
          <span>Show more</span>
          <Icon name="arrow-right" size="16" />
        </button> */}
      </div>
    </div>
  );
};

export default Catalog;
