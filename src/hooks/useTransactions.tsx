import { createContext, useEffect, useState, ReactNode, useContext } from "react";
import { api } from "../services/api";

interface Transaction {
  amount: number;
  category: string;
  createAt: string;
  id: number;
  title: string;
  type: string;
}

interface childrenProps {
  children: ReactNode;
}

interface TransactionsContextData{
  transactions: Transaction[];
  createTransaction: (transaction: TransactionInput) => Promise<void>;
}

type TransactionInput = Omit<Transaction, 'id' | 'createAt'>

export const TransactionsContext = createContext<TransactionsContextData>({} as TransactionsContextData);

export function TransactionsProvider({children}: childrenProps) {
  const [transactions, setTransactions] = useState<Transaction[]>([]);

  useEffect(() => {
    api
      .get("/transactions")
      .then((responseData) => setTransactions(responseData.data.transactions));
  }, []);
  
  async function createTransaction(transactionInput: TransactionInput){
    const response = await api.post('/transactions', {
      ...transactionInput,
      createAt: new Date(),
    })
    const {transaction} = response.data;
    console.log("what", transactions)
    console.log("hmmmm", transactionInput)
    

    setTransactions([...transactions, transaction])


  }

  return (
    <TransactionsContext.Provider value={{transactions, createTransaction} }>
      {children}
    </TransactionsContext.Provider>
  );
}

export function useTransactions(){
  const context = useContext(TransactionsContext)

  return context;
}