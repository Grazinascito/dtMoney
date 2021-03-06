import Modal from "react-modal";
import {
  Container,
  TransactionsTypeContainer,
  RadioBox
} from "../NewTransactionsModal/styles";
import closeImg from "../../assets/close.svg";
import incomeImg from "../../assets/income.svg";
import outcomeImg from "../../assets/outcome.svg";
import { FormEvent, useState } from "react";
import {useTransactions } from "../../hooks/useTransactions";


interface NewTransactionsModalProps {
  isOpenModal: boolean;
  onRequestCloseModal: () => void;
}

export function NewTransactionsModal({isOpenModal,onRequestCloseModal}: NewTransactionsModalProps) {
  const [type, setType] = useState('deposit');
  const [title, setTitle] = useState('');
  const [category, setCategory] = useState('');
  const [amount, setAmount] = useState(0);

  const {createTransaction} = useTransactions()
  
  async function handleCreateNewTransactions(event: FormEvent){
    event.preventDefault()

    await createTransaction({
      title, 
      amount,
      category,
      type
    })

    setTitle('')
    setAmount(0)
    setCategory('')
    setType('deposit')

    onRequestCloseModal()
  }


  return (
  
    <Modal
      isOpen={isOpenModal}
      onRequestClose={onRequestCloseModal}
      overlayClassName="react-modal-overlay"
      className="react-modal-content"
    >
      <button
        type="button"
        onClick={onRequestCloseModal}
        className="react-modal-close"
      >
        <img src={closeImg} alt="fechar modal" />
      </button>
      <Container>
        <h2>Cadastrar Transação</h2>

        <input
         type="text" 
         placeholder="Titulo"
         value={title}
         onChange={(event) => setTitle(event.target.value)} 
         
         />

        <input
         type="number"
          placeholder="Valor"
          value={amount}
          onChange={(event) => setAmount(Number(event.target.value))} 
           />

        <TransactionsTypeContainer>
          <RadioBox
            type="button"
            onClick={() => setType('deposit')}
            isActive={type === 'deposit'}
            isColorActive="green"

          >
            <img src={incomeImg} alt="Entrada" />
            <span>Entrada</span> 
          </RadioBox>
          <RadioBox
           type="button"  
           onClick={() => setType('withdraw')}
           isActive={type === 'withdraw'}
           isColorActive="red"
           >
            <img src={outcomeImg} alt="Saída" />
           <span>Saída</span> 
          </RadioBox>
        </TransactionsTypeContainer>

        <input
          type="text"
          placeholder="Categoria"
          value={category}
          onChange={(event) => setCategory(event.target.value)}

          />

        <button type="submit" onClick={handleCreateNewTransactions}>Cadastrar</button>
      </Container>
    </Modal>
  );
}
