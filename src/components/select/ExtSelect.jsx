import React from "react";
import styles from "./ExtSelect.module.css";

function ExtSelect({ style, children, ...attrs }) {
  return (
    <select {...attrs} className={styles["form-field"]} style={style}>
      {children}
    </select>
  );
}

export default ExtSelect;
