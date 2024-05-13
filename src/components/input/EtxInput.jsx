import React from "react";
import styles from "./EtxInput.module.css";

function EtxInput({ style, ...attrs }) {
  return <input {...attrs} className={styles["form-field"]} style={style} />;
}

export default EtxInput;
