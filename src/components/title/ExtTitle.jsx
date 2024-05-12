import React from "react";
import styles from "./ExtTItle.module.css";

function ExtTitle({ title, style }) {
  return (
    <div>
      <h1 className={styles["txt-title"]} style={style}>
        {title}
      </h1>
    </div>
  );
}

export default ExtTitle;
