import React from "react";
import styles from "./EtxTransaction.module.css";
import ExtButton from "../button/ExtButton";
const Logo = () => {
  return (
    <svg
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M11.8604 4.00061C15.2823 3.97075 18.6209 5.03874 21.3878 7.04353C21.5012 7.12574 21.558 7.16685 21.5673 7.22911C21.5766 7.29137 21.5339 7.34805 21.4485 7.46142L12.2353 19.6878C12.1272 19.8312 12.0731 19.903 11.9992 19.9036C11.9252 19.9042 11.8699 19.8335 11.7593 19.6919L2.33412 7.62823C2.24672 7.51637 2.20303 7.46043 2.21128 7.39802C2.21954 7.33561 2.27555 7.29352 2.38756 7.20933C5.119 5.15657 8.43845 4.03047 11.8604 4.00061Z"
        stroke="#33363F"
        stroke-linecap="round"
      />
      <path
        d="M11.8866 7.00049C14.6481 6.9764 17.3428 7.83229 19.5819 9.43996C19.6955 9.5215 19.7523 9.56228 19.7618 9.62471C19.7713 9.68713 19.7286 9.74387 19.6431 9.85733L12.2353 19.6878C12.1272 19.8312 12.0731 19.903 11.9992 19.9036C11.9252 19.9042 11.8699 19.8335 11.7593 19.6919L4.1811 9.99226C4.09364 9.88031 4.0499 9.82433 4.05832 9.76174C4.06674 9.69916 4.1228 9.6574 4.23494 9.57388C6.44563 7.92739 9.12502 7.02459 11.8866 7.00049Z"
        stroke="#33363F"
        stroke-linecap="round"
      />
      <mask
        id="mask0_2_51"
        style={{ maskType: "alpha" }}
        maskUnits="userSpaceOnUse"
        x="2"
        y="4"
        width="20"
        height="16"
      >
        <path
          d="M21.4485 7.46142C21.5339 7.34805 21.5766 7.29137 21.5673 7.22911C21.558 7.16685 21.5012 7.12574 21.3878 7.04353C18.6209 5.03874 15.2823 3.97075 11.8604 4.00061C8.43845 4.03047 5.119 5.15657 2.38756 7.20933C2.27555 7.29352 2.21954 7.33561 2.21128 7.39802C2.20303 7.46043 2.24672 7.51637 2.33412 7.62823L11.7593 19.6919C11.8699 19.8335 11.9252 19.9042 11.9992 19.9036C12.0731 19.903 12.1272 19.8312 12.2353 19.6878L21.4485 7.46142Z"
          fill="#33363F"
        />
      </mask>
      <g mask="url(#mask0_2_51)">
        <path
          fill-rule="evenodd"
          clip-rule="evenodd"
          d="M12 10C12 10.5523 11.5523 11 11 11C10.4477 11 10 10.5523 10 10C10 9.44772 10.4477 9 11 9C11.5523 9 12 9.44772 12 10ZM18 13C18 14.1046 17.1046 15 16 15C14.8954 15 14 14.1046 14 13C14 11.8954 14.8954 11 16 11C17.1046 11 18 11.8954 18 13ZM9 17C10.1046 17 11 16.1046 11 15C11 13.8954 10.1046 13 9 13C7.89543 13 7 13.8954 7 15C7 16.1046 7.89543 17 9 17Z"
          fill="#33363F"
        />
      </g>
    </svg>
  );
};
function EtxTransaction() {
  return (
    <div className={styles["main-container"]}>
      <section className={styles["left-container"]}>
        <div className={styles["cat-logo-container"]}>
          <Logo />
        </div>
        <div className={styles["text-container"]}>
          <span className={styles["title"]}>Samosa</span>
          <span className={styles["date"]}>March 20, 2024</span>
        </div>
      </section>
      <section className={styles["right-container"]}>
        <span className={styles.amount}>₹150</span>
        <ExtButton
          style={{
            backgroundColor: "var(--color-red-icon-bg)",
            padding: 0,
            width: "2.5rem",
            height: "2rem",
            boxShadow: "0px 4px 4px 0px #00000040",

            marginRight: "0.5rem",
          }}
        >
          <div className={styles["action-btn"]}>
            <Logo />
          </div>
        </ExtButton>
        <ExtButton
          style={{
            backgroundColor: "var(--color-button-bg)",
            padding: 0,
            width: "2.5rem",
            height: "2rem",
            boxShadow: "0px 4px 4px 0px #00000040",
          }}
        >
          <div className={styles["action-btn"]}>
            <Logo />
          </div>
        </ExtButton>
      </section>
    </div>
  );
}

export default EtxTransaction;
