import React, { useState } from "react";
import cn from "classnames";
import styles from "./AccountSettings.module.sass";
import Icon from "../../components/Icon";
import Dropdown from "../../components/Dropdown";
import PersonalInfo from "./PersonalInfo";
import ChangePassword from "./ChangePassword";

const items = [
  {
    title: "Personal info",
    icon: "user",
  },
  {
    title: "Change Password",
    icon: "lock",
  },
];

const AccountSettings = () => {
  const options = [];
  items.map((x) => options.push(x.title));

  const [activeTab, setActiveTab] = useState(options[0]);

  const handleClick = (x) => {
    setActiveTab(x.title);
  };

  return (
    <div className={cn("section", styles.section)}>
      <div className={cn("container", styles.container)}>
        {/* <Dropdown
          className={cn("tablet-show", styles.dropdown)}
          options={options}
          value={activeTab}
          setValue={setActiveTab}
        /> */}
        <div className={styles.menu}>
          {items.map((x, index) => (
            <div
              className={cn(styles.link, {
                [styles.active]: x.title === activeTab,
              })}
              onClick={() => handleClick(x, index)}
              key={index}
            >
              <Icon name={x.icon} size="16" />
              {x.title}
            </div>
          ))}
        </div>
        <div className={styles.wrapper}>
          {activeTab === options[0] && <PersonalInfo />}
          {activeTab === options[1] && <ChangePassword />}
        </div>
      </div>
    </div>
  );
};

export default AccountSettings;
