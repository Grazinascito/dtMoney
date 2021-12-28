import logoImg from "../../assets/logo.svg";
import { ContainerHeader, Content } from "./styles";

export function Header() {
  return (
    <ContainerHeader>
      <header>
        <Content>
          <img src={logoImg} alt="logo img" />
          <button type="button">Nova Transação</button>
        </Content>
      </header>
    </ContainerHeader>
  );
}
