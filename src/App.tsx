import { useState } from "react";
import Modal from "react-modal";
import { Dashboard } from "./components/Dashboard";
import { Header } from "./components/Header";
import { NewTransactionsModal } from "./components/NewTransactionsModal";
import { GlobalStyle } from "./styles/global";
import { TransactionsProvider } from "./hooks/useTransactions";

export function App() {
  Modal.setAppElement("#root");

  const [isOpenModalTransactions, setIsOpenModalTransactions] = useState(false);

  function handleIsOpenModalTransactions() {
    setIsOpenModalTransactions(true);
  }
  function handleIsCloseModalTransactions() {
    setIsOpenModalTransactions(false);
  }

  return (
    <TransactionsProvider>
      <Header handleIsOpenModalTransactions={handleIsOpenModalTransactions} />
      <Dashboard />

      <NewTransactionsModal
        isOpenModal={isOpenModalTransactions}
        onRequestCloseModal={handleIsCloseModalTransactions}
      />

      <GlobalStyle />
    </TransactionsProvider>
  );
}
