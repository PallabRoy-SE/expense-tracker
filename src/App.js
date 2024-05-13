import { IoGiftOutline } from "react-icons/io5";
import "./App.css";
import ExtBalanceCard from "./components/balance-card/ExtBalanceCard";
import ExtCard from "./components/card/ExtCard";
import EtxProgress from "./components/progress/EtxProgress";
import ExtTitle from "./components/title/ExtTitle";
import EtxTransaction from "./components/transaction/EtxTransaction";
import { BsSuitcase2 } from "react-icons/bs";
import ExtButton from "./components/button/ExtButton";
import { PiPizzaLight } from "react-icons/pi";
import {
  LiaLongArrowAltLeftSolid,
  LiaLongArrowAltRightSolid,
} from "react-icons/lia";
import ExtChart from "./components/chart/EtxChart";
import ExtModal from "./components/modals/modal/ExtModal";
import ExtModalBalance from "./components/modals/balance/ExtModalBalance";
import { useState } from "react";
import ExtModalExpense from "./components/modals/expense/ExtModalExpense";

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
function App() {
  const [isBalanceModalOpened, setBalanceModalOpenState] = useState(false);
  const [isExpenseModalOpened, setExpenseModalOpenState] = useState(false);
  const [isEditExpenseModalOpened, setEditExpenseModalOpenState] =
    useState(false);

  const handleTxnAction = (transaction, type) => {
    switch (type) {
      case "EDIT":
        setEditExpenseModalOpenState(true);
        break;
      case "DELETE":
        console.log("delete", transaction);
        break;

      default:
        break;
    }
  };
  return (
    <section className="main-container">
      <ExtTitle title="Expense Tracker" />
      <ExtCard style={{ backgroundColor: "var(--color-bg-secondary)" }}>
        <section className="statistics-container">
          <section className="balance-card-container">
            <ExtBalanceCard
              title="Wallet Balance"
              amount={4500}
              amountColor="var(--color-bright-green)"
              btnBg="linear-gradient(90deg, var(--color-yellow-green) 0%, var(--color-bright-green) 100%)"
              btnTitle="+ Add Income"
              btnClick={() => setBalanceModalOpenState(true)}
            />
            <ExtBalanceCard
              title="Expenses"
              amount={1500}
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
              <EtxTransaction
                CatLogo={PiPizzaLight}
                title="Samosa"
                date={new Date()}
                amount={500}
                handleAction={handleTxnAction}
              />
              <EtxTransaction
                CatLogo={IoGiftOutline}
                title="Samosa"
                date={new Date()}
                amount={500}
                handleAction={handleTxnAction}
              />
              <EtxTransaction
                CatLogo={BsSuitcase2}
                title="Samosa"
                date={new Date()}
                amount={500}
                handleAction={handleTxnAction}
              />
            </section>
            <footer className="txn-footer">
              <ExtButton style={paginationBtnStyle}>
                <LiaLongArrowAltLeftSolid />
              </ExtButton>
              <span className="page-count">1</span>
              <ExtButton style={paginationBtnStyle}>
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
        isOpen={isExpenseModalOpened || isEditExpenseModalOpened}
      >
        <ExtModalExpense
          handleClose={() =>
            (isEditExpenseModalOpened
              ? setEditExpenseModalOpenState
              : setExpenseModalOpenState)(false)
          }
          asEdit={isEditExpenseModalOpened}
        />
      </ExtModal>
    </section>
  );
}

export default App;
