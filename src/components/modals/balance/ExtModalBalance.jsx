import React from "react";
import styles from "./ExtModalBalance.module.css";
import ExtCard from "../../card/ExtCard";
import ExtTitle from "../../title/ExtTitle";
import EtxInput from "../../input/EtxInput";
import ExtButton from "../../button/ExtButton";

function ExtModalBalance({ handleClose }) {
  const handleSubmit = (e) => {
    e.preventDefault();
  };
  return (
    <ExtCard style={{ overflow: "hidden" }}>
      <section className={styles["main-container"]}>
        <ExtTitle
          title="Add Balance"
          style={{
            color: "var(--color-black)",
            fontSize: "1.9rem",
            marginBottom: "0.7rem",
          }}
        />
        <form onSubmit={handleSubmit} className={styles["form-container"]}>
          <EtxInput
            type="number"
            placeholder="Income Amount"
            min={0}
            required
          />
          <ExtButton
            type="submit"
            style={{
              fontFamily: "var(--font-open-sans)",
              boxShadow: "0px 4px 4px 0px #00000040",
              paddingInline: "1rem",
              marginInline: "1rem",
            }}
          >
            Add Balance
          </ExtButton>
          <ExtButton
            style={{
              fontFamily: "var(--font-open-sans)",
              boxShadow: "0px 4px 4px 0px #00000040",
              paddingInline: "1.5rem",
              backgroundColor: "var(--color-btn-grey-bg)",
              color: "var(--color-black)",
              fontWeight: 400,
            }}
            onClick={handleClose}
          >
            Cancel
          </ExtButton>
        </form>
      </section>
    </ExtCard>
  );
}

export default ExtModalBalance;
