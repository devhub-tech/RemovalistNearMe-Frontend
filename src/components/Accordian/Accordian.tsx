import React from "react";
import cn from "classnames";
import Icon from "../Icon";
import styles from "./Accordian.module.sass";

const Accordian = ({ rooms, incrementCount, decrementCount }) => {
  return (
    <div className="accordion faq-accordion" id="accordionExample">
      {rooms.map((room, roomIndex) => {
        return (
          <div
            key={room.name}
            className="accordion-item single-accordion-inner"
          >
            <h2 className="accordion-header" id={`heading${room.number}`}>
              <button
                className="accordion-button collapsed" // Add 'collapsed' class to button
                type="button"
                data-bs-toggle="collapse"
                data-bs-target={`#collapse${room.number}`}
                aria-expanded="false" // Change aria-expanded to false
                aria-controls={`collapse${room.number}`}
              >
                {room.name}
              </button>
            </h2>
            <div
              id={`collapse${room.number}`}
              className="accordion-collapse collapse" // Remove 'show' class
              aria-labelledby={`heading${room.number}`}
              data-bs-parent="#accordionExample"
            >
              <div className="accordion-body">
                {room.items?.map((r, itemIndex) => {
                  return (
                    <div className={styles.row}>
                      <div className={cn(styles.col, styles.w50)}>
                        <div className={styles.category}>{r.name}</div>
                      </div>

                      <div className={cn(styles.col, styles.w50)}>
                        <div className={styles.row}>
                          <div className={cn(styles.col, styles.w33)}>
                            <div
                              onClick={() =>
                                incrementCount(roomIndex, itemIndex)
                              }
                            >
                              <Icon name="plus" size="20" />
                            </div>
                          </div>
                          <div className={cn(styles.col, styles.w33)}>
                            {r.count}
                          </div>
                          <div className={cn(styles.col, styles.w33)}>
                            <div
                              onClick={() =>
                                decrementCount(roomIndex, itemIndex)
                              }
                            >
                              <Icon name="minus" size="20" />
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default Accordian;
