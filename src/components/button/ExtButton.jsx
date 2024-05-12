import React from "react";
import styles from "./ExtButton.module.css";

function ExtButton({ style, children, ...attributes }) {
  return (
    <button {...attributes} className={styles.btn} style={style}>
      {children}
    </button>
  );
}

export default ExtButton;
