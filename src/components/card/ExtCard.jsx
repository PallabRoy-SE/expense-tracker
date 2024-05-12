import React from "react";
import styles from "./ExtCard.module.css";

function ExtCard({ style, children }) {
  return (
    <section className={styles["card-container"]} style={style}>
      {children}
    </section>
  );
}

export default ExtCard;
