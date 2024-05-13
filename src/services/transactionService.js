export default function useTransactionService() {
  const getTransactions = () => {
    const transactions = localStorage.getItem("txn");
    if (transactions) {
      return JSON.parse(transactions);
    }
    return [];
  };

  const addTransaction = (title, categoryId, amount, date) => {
    const transactions = getTransactions();
    const txnObj = {
      id: transactions.length
        ? transactions[transactions.length - 1].id + 1
        : 1,
      title,
      categoryId,
      amount,
      date,
    };
    transactions.push(txnObj);
    localStorage.setItem("txn", JSON.stringify(transactions));
  };

  const updateTransaction = (updateTxn) => {
    const transactions = getTransactions();
    const index = transactions.findIndex((txn) => txn.id === updateTxn.id);
    if (index !== -1) {
      transactions[index] = {
        ...transactions[index],
        ...updateTxn,
      };
      localStorage.setItem("txn", JSON.stringify(transactions));
    } else {
      alert(`Transaction with id: ${updateTxn.id} not found`);
    }
  };

  const deleteTransaction = (id) => {
    const transactions = getTransactions();
    const index = transactions.findIndex((txn) => txn.id === id);
    if (index !== -1) {
      transactions.splice(index, 1);
      localStorage.setItem("txn", JSON.stringify(transactions));
    } else {
      alert(`Transaction with id: ${id} not found`);
    }
  };

  return {
    getTransactions,
    addTransaction,
    updateTransaction,
    deleteTransaction,
  };
}
