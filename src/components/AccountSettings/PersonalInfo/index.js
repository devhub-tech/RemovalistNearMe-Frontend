import React, { useState } from "react";
import cn from "classnames";
import styles from "./PersonalInfo.module.sass";
import TextInput from "../../TextInput";

const PersonalInfo = () => {
  return (
    <div className={styles.section}>
      <div className={cn("h2", styles.title)}>Personal Info</div>
      <div className={styles.box}>
        <div className={styles.fieldset}>
          <TextInput
            className={styles.field}
            label="Email"
            name="email"
            type="email"
            placeholder="e.g. sam@gmail.com"
            required
          />
          <TextInput
            className={styles.field}
            label="Phone number"
            name="mobile"
            type="phone"
            placeholder="e.g. +61-4-1234 5678"
            required
          />
          <div className={styles.row}>
            <TextInput
              className={styles.field}
              label="First Name"
              name="first"
              type="text"
              placeholder="e.g. Sam"
              required
            />
            <TextInput
              className={styles.field}
              label="Last Name"
              name="last"
              type="text"
              placeholder="e.g. Curran"
              required
            />
          </div>
        </div>
      </div>
      <div className="btn btn-base">Update</div>
      <div className={cn("h2", styles.title)}>{}</div>
    </div>
  );
};

export default PersonalInfo;
