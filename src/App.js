import "./App.css";
import ExtBalanceCard from "./components/balance-card/ExtBalanceCard";
import ExtCard from "./components/card/ExtCard";
import EtxProgress from "./components/progress/EtxProgress";
import ExtTitle from "./components/title/ExtTitle";
import EtxTransaction from "./components/transaction/EtxTransaction";

const secondaryTitleStyle = {
  fontStyle: "italic",
  fontSize: "1.75rem",
};
function App() {
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
              btnClick={() => console.log("add")}
            />
            <ExtBalanceCard
              title="Expenses"
              amount={500}
              amountColor="var(--color-button-bg)"
              btnBg="linear-gradient(90deg, var(--color-light-red) 0%, var(--color-bright-red) 80%, var(--color-red) 100%)"
              btnTitle="+ Add Expense"
              btnClick={() => console.log("add expense")}
            />
          </section>
        </section>
      </ExtCard>
      <section className="bottom-container">
        <section className="txn-container">
          <ExtTitle title="Recent Transactions" style={secondaryTitleStyle} />
          <ExtCard style={{ padding: "1rem" }}>
            <section className="txn-body">
              <EtxTransaction />
              <EtxTransaction />
              <EtxTransaction />
            </section>
            <footer className="txn-footer"></footer>
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
    </section>
  );
}

export default App;
