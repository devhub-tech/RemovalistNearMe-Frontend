import React, { useState } from "react";
import { NavLink, useLocation } from "react-router-dom";
import cn from "classnames";
import OutsideClickHandler from "react-outside-click-handler";
import styles from "./User.module.sass";
import Icon from "../Icon";

const User = ({ className, items }: { className?: any; items: any }) => {
  const [visible, setVisible] = useState(false);
  const { pathname } = useLocation();

  return (
    <OutsideClickHandler onOutsideClick={() => setVisible(false)}>
      <div
        className={cn(styles.user, className, {
          [styles.active]: visible,
        })}
      >
        <div className={styles.head} onClick={() => setVisible(!visible)}>
          <img src="assets/img/portfolio/profile.png" alt="Avatar" />
        </div>
        <div className={styles.body}>
          <div className={styles.group}>
            {items.map((item, index) => (
              <div className={styles.menu} key={index}>
                {item.menu.map((x, index) => (
                  <NavLink
                    style={{ color: "black" }}
                    className={cn(styles.item, {
                      // [styles.active]: pathname === x.url,
                    })}
                    to={x.url}
                    onClick={() => setVisible(!visible)}
                    key={index}
                  >
                    <div className={styles.icon}>
                      <Icon name={x.icon} size="24" />
                    </div>
                    <div className={styles.text}>{x.title}</div>
                  </NavLink>
                ))}
              </div>
            ))}
          </div>
        </div>
      </div>
    </OutsideClickHandler>
  );
};

export default User;
