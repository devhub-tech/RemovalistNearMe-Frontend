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
            key={room.room_type?.name}
            className="accordion-item single-accordion-inner"
          >
            <h2 className="accordion-header" id={`heading${roomIndex}`}>
              <button
                className="accordion-button collapsed" // Add 'collapsed' class to button
                type="button"
                data-bs-toggle="collapse"
                data-bs-target={`#collapse${roomIndex}`}
                aria-expanded="false" // Change aria-expanded to false
                aria-controls={`collapse${roomIndex}`}
              >
                {room.room_type?.name}
              </button>
            </h2>
            <div
              id={`collapse${roomIndex}`}
              className="accordion-collapse collapse" // Remove 'show' class
              aria-labelledby={`heading${roomIndex}`}
              data-bs-parent="#accordionExample"
            >
              <div className="accordion-body">
                {room.inventory_items.map((item, itemIndex) => {
                  return (
                    <div className={styles.row}>
                      <div className={cn(styles.col, styles.w50)}>
                        <div className={styles.category}>{item.item.name}</div>
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
                            {item.quantity}
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
