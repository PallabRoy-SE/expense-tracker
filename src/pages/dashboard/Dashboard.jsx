import "./Dashboard.css";
import ExtBalanceCard from "../../components/balance-card/ExtBalanceCard";
import ExtCard from "../../components/card/ExtCard";
import EtxProgress from "../../components/progress/EtxProgress";
import ExtTitle from "../../components/title/ExtTitle";
import EtxTransaction from "../../components/transaction/EtxTransaction";
import ExtButton from "../../components/button/ExtButton";
import {
  LiaLongArrowAltLeftSolid,
  LiaLongArrowAltRightSolid,
} from "react-icons/lia";
import ExtChart from "../../components/chart/EtxChart";
import ExtModal from "../../components/modals/modal/ExtModal";
import ExtModalBalance from "../../components/modals/balance/ExtModalBalance";
import { useContext, useEffect, useState } from "react";
import ExtModalExpense from "../../components/modals/expense/ExtModalExpense";
import { useSnackbar } from "notistack";
import GlobalContext from "../../contexts/GlobalContext";

const secondaryTitleStyle = {
  fontStyle: "italic",
  fontSize: "1.75rem",
};

const paginationBtnStyle = {
  padding: 0,
  width: "2rem",
  height: "2rem",
  backgroundColor: "var(--color-smoke-grey)",
  boxShadow: "0px 4px 4px 0px #00000040",
  borderRadius: "0.8rem",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  color: "var(--color-black-alt)",
};

function Dashboard() {
  const globalContext = useContext(GlobalContext);
  const { enqueueSnackbar } = useSnackbar();
  const [isBalanceModalOpened, setBalanceModalOpenState] = useState(false);
  const [isExpenseModalOpened, setExpenseModalOpenState] = useState(false);
  const [expenses, setExpenses] = useState([]);
  const [editExpense, setEditExpense] = useState(null);
  const [paginationData, setPaginationData] = useState({
    current: 0,
    expensePerPage: 3,
  });

  const generateCurrentPageExpenses = () => {
    setExpenses(() => [
      ...[...globalContext.expenses].splice(
        paginationData.current * paginationData.expensePerPage,
        paginationData.expensePerPage
      ),
    ]);
  };

  const handleNavigation = (moveTo) => {
    setPaginationData((prev) => ({ ...prev, current: prev.current + moveTo }));
  };

  const extractExpenseCategory = (id) => {
    return globalContext.categoryData.find((cat) => cat.id === parseInt(id));
  };
  const handleExpAction = (expense, type) => {
    switch (type) {
      case "EDIT":
        setEditExpense(expense);
        break;
      case "DELETE":
        try {
          globalContext.deleteExpense(expense.id);
          enqueueSnackbar(`Expense Deleted`, {
            variant: "success",
          });
        } catch (error) {
          enqueueSnackbar(error, {
            variant: "error",
          });
        }
        break;

      default:
        break;
    }
  };

  useEffect(() => {
    generateCurrentPageExpenses();
  }, [paginationData, globalContext.expenses]);

  return (
    <section className="main-container">
      <ExtTitle title="Expense Tracker" />
      <ExtCard style={{ backgroundColor: "var(--color-bg-secondary)" }}>
        <section className="statistics-container">
          <section className="balance-card-container">
            <ExtBalanceCard
              title="Wallet Balance"
              amount={globalContext.balance}
              amountColor="var(--color-bright-green)"
              btnBg="linear-gradient(90deg, var(--color-yellow-green) 0%, var(--color-bright-green) 100%)"
              btnTitle="+ Add Income"
              btnClick={() => setBalanceModalOpenState(true)}
            />
            <ExtBalanceCard
              title="Expenses"
              amount={globalContext.totalExpense}
              amountColor="var(--color-button-bg)"
              btnBg="linear-gradient(90deg, var(--color-light-red) 0%, var(--color-bright-red) 80%, var(--color-red) 100%)"
              btnTitle="+ Add Expense"
              btnClick={() => setExpenseModalOpenState(true)}
            />
          </section>
          <section className="chart-container">
            <ExtChart />
          </section>
        </section>
      </ExtCard>
      <section className="bottom-container">
        <section className="txn-container">
          <ExtTitle title="Recent Transactions" style={secondaryTitleStyle} />
          <ExtCard style={{ padding: "1rem", paddingBottom: 0 }}>
            <section className="txn-body">
              {expenses.map((expense) => (
                <EtxTransaction
                  key={expense.id}
                  CatLogo={extractExpenseCategory(expense.categoryId).logo}
                  title={expense.title}
                  date={new Date(expense.date)}
                  amount={expense.amount}
                  handleAction={(type) => {
                    handleExpAction(expense, type);
                  }}
                />
              ))}
            </section>
            <footer className="txn-footer">
              <ExtButton
                disabled={paginationData.current === 0}
                style={paginationBtnStyle}
                onClick={() => handleNavigation(-1)}
              >
                <LiaLongArrowAltLeftSolid />
              </ExtButton>
              <span className="page-count">{paginationData.current + 1}</span>
              <ExtButton
                disabled={
                  paginationData.current ===
                  Math.ceil(
                    globalContext.expenses.length /
                      paginationData.expensePerPage
                  ) -
                    1
                }
                style={paginationBtnStyle}
                onClick={() => handleNavigation(1)}
              >
                <LiaLongArrowAltRightSolid />
              </ExtButton>
            </footer>
          </ExtCard>
        </section>
        <section className="progress-container">
          <ExtTitle title="Top Expenses" style={secondaryTitleStyle} />
          <ExtCard>
            <section className="expense-container">
              <EtxProgress title="Entertainment" progress={90} />
              <EtxProgress title="Food" progress={70} />
              <EtxProgress title="Travel" progress={30} />
            </section>
          </ExtCard>
        </section>
      </section>
      <ExtModal id="BalanceModal" isOpen={isBalanceModalOpened}>
        <ExtModalBalance handleClose={() => setBalanceModalOpenState(false)} />
      </ExtModal>
      <ExtModal
        id="ExpenseModal"
        isOpen={isExpenseModalOpened || editExpense ? true : false}
      >
        <ExtModalExpense
          handleClose={() =>
            editExpense ? setEditExpense(null) : setExpenseModalOpenState(false)
          }
          asEdit={editExpense}
        />
      </ExtModal>
    </section>
  );
}

export default Dashboard;
