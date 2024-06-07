import React from "react";
import cn from "classnames";
import styles from "./Counter.module.sass";
import Icon from "../Icon";

const Counter = ({
  className,
  value,
  increment,
  decrement,
  iconMinus,
  iconPlus,
}) => {
  return (
    <div className={cn(className, styles.counter)}>
      <button
        className={cn(styles.button, { [styles.disabled]: value === 0 })}
        onClick={increment}
      >
        <Icon name={iconMinus} size="24" />
      </button>
      <div className={styles.number}>{value}</div>
      <button className={styles.button} onClick={decrement}>
        <Icon name={iconPlus} size="24" />
      </button>
    </div>
  );
};

export default Counter;
