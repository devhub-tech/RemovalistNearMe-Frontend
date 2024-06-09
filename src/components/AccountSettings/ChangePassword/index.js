import React, { useState } from "react";
import cn from "classnames";
import styles from "./ChangePass.module.sass";
import TextInput from "../../TextInput";

const ChangePassword = () => {
  return (
    <div className={styles.section}>
      <div className={cn("h2", styles.title)}>Change Password</div>
      <div className={styles.box}>
        <div className={styles.fieldset}>
          <div className={styles.row}>
            <TextInput
              className={styles.field}
              label="New Password"
              name="newpass"
              type="password"
              placeholder="e.g. XXXXXXXXXXXXXXXXXXXXXXXX"
              required
            />
            <TextInput
              className={styles.field}
              label="Confirm Password"
              name="confirmpass"
              type="password"
              placeholder="e.g. XXXXXXXXXXXXXXXXXXXXXXXX"
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

export default ChangePassword;
