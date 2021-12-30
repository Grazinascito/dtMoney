import logoImg from "../../assets/logo.svg";
import { ContainerHeader, Content } from "./styles";

interface HeaderTransactionsProps {
  handleIsOpenModalTransactions: () => void;
}

export function Header({handleIsOpenModalTransactions}:HeaderTransactionsProps) {

  return (
    <ContainerHeader>
      <header>
        <Content>
          <img src={logoImg} alt="logo img" />
          <button type="button" onClick={handleIsOpenModalTransactions}>Nova Transação</button>
        </Content>
      </header>

    </ContainerHeader>
  );
}
