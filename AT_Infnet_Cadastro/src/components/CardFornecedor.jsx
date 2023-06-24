import styled from "styled-components";
import Button from './Button'


export default function CardFornecedor(props) {
  return (
    <ContainerFornecedor>
      <Button />
      <ContainerInfo>
        <Name>{props.razaoSocial} - {props.cnpj}</Name>
        <Endereco>{props.endereco}, nº {props.numero}, {props.bairro}, {props.cidade}</Endereco>
        <ContainerContato>
          <TelefoneEmail>{props.telefone}</TelefoneEmail>
          <hr></hr>
          <TelefoneEmail>{props.email}</TelefoneEmail>
        </ContainerContato>
        <Serviço>{props.servico}</Serviço>
      </ContainerInfo>
    </ContainerFornecedor>
  );
}

const ContainerFornecedor = styled.div`
  width: 470px;
  height: 100px;
  border: 1px solid #000;
  display: flex;
  align-items: center;
  padding: 5px;
  margin: 5px 0;
`;

const ContainerInfo = styled.div`
  height: 100%;
  width: 90%;
  display: flex;
  flex-direction: column;
  align-items: center;
  overflow: hidden;
`;

const Name = styled.header`
  text-transform: uppercase;
  text-decoration: underline;
  text-align: center;
  font-size: 13px;
`;

const Endereco = styled.p`
  text-align: center;
  font-size: 16px;
  margin: 6px;
`;

const ContainerContato = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  gap: 0 15px;
  height: 15px;
`;

const TelefoneEmail = styled.p`
  font-size: 12px;
`;

const Serviço = styled.h4`
  text-decoration: overline;
  margin: 10px;
`;
