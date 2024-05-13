import React from "react";
import styles from "./EtxTransaction.module.css";
import ExtButton from "../button/ExtButton";
import { AiOutlineCloseCircle } from "react-icons/ai";
import { BiPencil } from "react-icons/bi";

const actionButtonStyle = {
  padding: 0,
  width: "2rem",
  height: "2rem",
  boxShadow: "0px 4px 4px 0px #00000040",
  borderRadius: "0.8rem",
};

function EtxTransaction({ title, date, amount, CatLogo, handleAction }) {
  return (
    <div className={styles["main-container"]}>
      <section className={styles["left-container"]}>
        <div className={styles["cat-logo-container"]}>
          <CatLogo color="black" className={styles["cat-logo"]} />
        </div>
        <div className={styles["text-container"]}>
          <span className={styles["title"]}>{title ?? "--"}</span>
          <span className={styles["date"]}>
            {date
              ? new Date(date).toLocaleDateString("en-US", {
                  year: "numeric",
                  month: "long",
                  day: "numeric",
                })
              : "--"}
          </span>
        </div>
      </section>
      <section className={styles["right-container"]}>
        <span className={styles.amount}>₹{amount ?? 0}</span>
        <ExtButton
          style={{
            ...actionButtonStyle,
            backgroundColor: "var(--color-red-icon-bg)",
            marginRight: "0.5rem",
          }}
          onClick={() => handleAction("DELETE")}
        >
          <div className={styles["action-btn"]}>
            <AiOutlineCloseCircle />
          </div>
        </ExtButton>
        <ExtButton
          style={actionButtonStyle}
          onClick={() => handleAction("EDIT")}
        >
          <div className={styles["action-btn"]}>
            <BiPencil />
          </div>
        </ExtButton>
      </section>
    </div>
  );
}

export default EtxTransaction;
