import styled from "styled-components";
import { InputPadrao } from "./Styles";


export default function InputContatos() {
    return (
    <ContainerExternalInput>
    <InternalInputContainer>
      <InputPadrao
        placeholder="Razão Social"
        width={"95%"}
        height={"50%"}
      />
    </InternalInputContainer>
    <InternalInputContainer>
      <InputPadrao
        placeholder="CNPJ"
        width={"45%"}
        height={"50%"}
      />
      <InputPadrao
        placeholder="Serviço"
        width={"45%"}
        height={"50%"}
      />
    </InternalInputContainer>
    <InternalInputContainer>
      <InputPadrao
        placeholder="Telefone"
        width={"45%"}
        height={"50%"}
      />
      <InputPadrao
        placeholder="Email"
        width={"45%"}
        height={"50%"}
      />
    </InternalInputContainer>
  </ContainerExternalInput>
)
}

const ContainerExternalInput = styled.div`
width: 90%;
height: 80%;
border: 1px solid #000;
margin-bottom: 25px;
background-color: #e2e2e2;
display: flex;
flex-direction: column;
align-items: center;
justify-content: center;
box-shadow: 0px 8px 5px -3px rgba(0, 0, 0, 0.1);
`;

const InternalInputContainer = styled.div`
width: 90%;
height: 20%;
display: flex;
align-items: center;
justify-content: space-around;
margin: 0;
margin: 3.5% 0;
`;
