import { useEffect, useState } from "react";
import { BsSuitcase2 } from "react-icons/bs";
import { IoGiftOutline } from "react-icons/io5";
import { PiPizzaLight } from "react-icons/pi";

export default function useGlobalValueService() {
  const categoryData = [
    { id: 1, label: "Entertainment", logo: IoGiftOutline },
    { id: 2, label: "Food", logo: PiPizzaLight },
    { id: 3, label: "Travel", logo: BsSuitcase2 },
  ];
  let localBalance = localStorage.getItem("bln");
  if (localBalance === undefined || localBalance === null) {
    localBalance = 5000;
    localStorage.setItem("bln", `${localBalance}`);
  }
  const [balance, setBalance] = useState(localBalance);

  let localExpenses = localStorage.getItem("exp");
  const [expenses, setExpenses] = useState(
    localExpenses ? JSON.parse(localExpenses) : []
  );
  const [totalExpense, setTotalExpense] = useState(0);

  const setLocalExpenses = (expData) => {
    localStorage.setItem("exp", JSON.stringify(expData));
  };

  const updateWallet = (amount) => {
    const updatedBalance = parseInt(balance) * 1 + 1 * amount;
    setBalance(updatedBalance);
    localStorage.setItem("bln", `${updatedBalance}`);
  };

  const addExpense = (title, categoryId, amount, date) => {
    const expenseObj = {
      id: expenses.length ? expenses[expenses.length - 1].id + 1 : 1,
      title,
      categoryId,
      amount,
      date,
    };
    const updatedExpenses = [...expenses, expenseObj];
    setExpenses(() => updatedExpenses);
    setLocalExpenses(updatedExpenses);
    updateWallet(amount * -1);
  };

  const updateExpense = (updateExp) => {
    const index = expenses.findIndex((exp) => exp.id === updateExp.id);
    if (index !== -1) {
      const prevAmount = expenses[index].amount;
      const temp = [...expenses];
      temp[index] = {
        ...temp[index],
        ...updateExp,
      };
      setExpenses(() => [...temp]);
      setLocalExpenses(temp);
      const currAmount = updateExp.amount;

      updateWallet(prevAmount * 1 - currAmount * 1);
    } else {
      throw new Error(`Transaction with id: ${updateExp.id} not found`);
    }
  };

  const deleteExpense = (id) => {
    const index = expenses.findIndex((exp) => exp.id === id);
    if (index !== -1) {
      const amount = expenses[index].amount;

      const temp = [...expenses];
      temp.splice(index, 1);
      setExpenses(() => [...temp]);
      setLocalExpenses(temp);

      updateWallet(amount * 1);
    } else {
      throw new Error(`Transaction with id: ${id} not found`);
    }
  };

  useEffect(() => {
    setTotalExpense(
      expenses.reduce((prev, exp) => prev * 1 + exp.amount * 1, 0)
    );
  }, [expenses]);

  return {
    categoryData,
    balance,
    updateWallet,
    expenses,
    addExpense,
    updateExpense,
    deleteExpense,
    totalExpense,
  };
}
