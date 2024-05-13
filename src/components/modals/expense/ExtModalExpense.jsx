import React, { useContext, useState } from "react";
import ExtCard from "../../card/ExtCard";
import ExtTitle from "../../title/ExtTitle";
import styles from "./ExtModalExpense.module.css";
import EtxInput from "../../input/EtxInput";
import ExtButton from "../../button/ExtButton";
import ExtSelect from "../../select/ExtSelect";
import GlobalContext from "../../../contexts/GlobalContext";
import useTransactionService from "../../../services/transactionService";

function ExtModalExpense({ handleClose, asEdit }) {
  const txnService = useTransactionService();
  const { categoryData } = useContext(GlobalContext);
  const [formData, setFormData] = useState({
    title: "",
    amount: "",
    categoryId: -1,
    date: "",
  });

  const clearForm = () => {
    setFormData({
      title: "",
      amount: 0,
      categoryId: -1,
      date: "",
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    try {
      txnService.addTransaction(
        formData.title,
        formData.categoryId,
        formData.amount,
        formData.date
      );
      alert("Transaction added");
      handleClose();
      clearForm();
    } catch (error) {
      console.log(error);
    }
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
            value={formData.title}
            onChange={(e) =>
              setFormData((prev) => ({ ...prev, title: e.target.value }))
            }
          />
          <EtxInput
            style={{ marginBottom: "1.3rem" }}
            type="number"
            placeholder="Price"
            min={0}
            required
            value={formData.amount}
            onChange={(e) =>
              setFormData((prev) => ({ ...prev, amount: e.target.value }))
            }
          />
          <ExtSelect
            style={{ marginBottom: "1.3rem" }}
            placeholder="Select Category"
            required
            value={formData.categoryId}
            onChange={(e) =>
              setFormData((prev) => ({ ...prev, categoryId: e.target.value }))
            }
          >
            <option value={-1} disabled>
              Select Category
            </option>
            {categoryData.map((category) => (
              <option key={category.id} value={category.id}>
                {category.label}
              </option>
            ))}
          </ExtSelect>
          <EtxInput
            style={{ marginBottom: "1.3rem" }}
            type="date"
            min={0}
            required
            value={formData.date}
            onChange={(e) =>
              setFormData((prev) => ({ ...prev, date: e.target.value }))
            }
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
