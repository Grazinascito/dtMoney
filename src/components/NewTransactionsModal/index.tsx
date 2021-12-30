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
import { api } from "../../services/api";

interface NewTransactionsModalProps {
  isOpenModal: boolean;
  onRequestCloseModal: () => void;
}

export function NewTransactionsModal({isOpenModal,onRequestCloseModal}: NewTransactionsModalProps) {

  function handleCreateNewTransactions(event: FormEvent){
    event.preventDefault()

   const data = {
      type,
      title,
      category,
      value
    }

    api.post("/transactions", data)
  }

  const [type, setType] = useState('deposit');
  const [title, setTitle] = useState('');
  const [category, setCategory] = useState('');
  const [value, setValue] = useState(0);

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
          value={value}
          onChange={(event) => setValue(Number(event.target.value))} 
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
