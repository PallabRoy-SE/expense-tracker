import React from "react";
import styles from "./ExtBalanceCard.module.css";
import ExtCard from "../card/ExtCard";
import ExtButton from "../button/ExtButton";

function ExtBalanceCard({
  title,
  amount,
  amountColor,
  btnTitle,
  btnClick,
  btnBg,
}) {
  return (
    <ExtCard
      style={{
        backgroundColor: "var(--color-card-bg)",
      }}
    >
      <section className={styles["main-container"]}>
        <div className={styles["text-container"]}>
          <span>{title}: </span>
          <span className={styles.balance} style={{ color: amountColor }}>
            ₹{amount}
          </span>
        </div>
        <ExtButton
          style={{
            background: btnBg,
          }}
          onClick={btnClick}
        >
          {btnTitle}
        </ExtButton>
      </section>
    </ExtCard>
  );
}

export default ExtBalanceCard;
