import React from "react";
import ExtCard from "../../card/ExtCard";
import ExtTitle from "../../title/ExtTitle";
import styles from "./ExtModalExpense.module.css";
import EtxInput from "../../input/EtxInput";
import ExtButton from "../../button/ExtButton";
import ExtSelect from "../../select/ExtSelect";

function ExtModalExpense({ handleClose, asEdit }) {
  const handleSubmit = (e) => {
    e.preventDefault();
  };
  return (
    <ExtCard style={{ overflow: "hidden" }}>
      <section className={styles["main-container"]}>
        <ExtTitle
          title={`${asEdit ? "Edit" : "Add"} Expenses`}
          style={{
            color: "var(--color-black)",
            fontSize: "1.9rem",
            marginBottom: "0.7rem",
          }}
        />
        <form onSubmit={handleSubmit} className={styles["form-container"]}>
          <EtxInput
            style={{ marginBottom: "1.3rem" }}
            type="text"
            placeholder="Title"
            required
          />
          <EtxInput
            style={{ marginBottom: "1.3rem" }}
            type="number"
            placeholder="Price"
            min={0}
            required
          />
          <ExtSelect
            style={{ marginBottom: "1.3rem" }}
            placeholder="Select Category"
            required
            defaultValue=""
          >
            <option value="" disabled>
              Select Category
            </option>
            <option value="entertainment">Entertainment</option>
            <option value="food">Food</option>
            <option value="travel">Travel</option>
          </ExtSelect>
          <EtxInput
            style={{ marginBottom: "1.3rem" }}
            type="date"
            min={0}
            required
          />
          <ExtButton
            type="submit"
            style={{
              fontFamily: "var(--font-open-sans)",
              boxShadow: "0px 4px 4px 0px #00000040",
              paddingInline: "1rem",
            }}
          >
            {`${asEdit ? "Edit" : "Add"} Expenses`}
          </ExtButton>
          <section>
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
          </section>
        </form>
      </section>
    </ExtCard>
  );
}

export default ExtModalExpense;
