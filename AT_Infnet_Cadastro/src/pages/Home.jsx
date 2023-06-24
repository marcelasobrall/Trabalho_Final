import styled from "styled-components";
import { Container } from "../components/Container";
import { MainH as Main, ButtonLink } from "../components/Styles";

export default function Home() {
  return (
    <>
      <Container>
        <Main>
          <MainDiv>
            <OptionDiv>
              <ButtonLink width={180} height={40} to="/fornecedores">
                Fornecedores
              </ButtonLink>
              <InternalDiv
                width={100}
                height={65}
                padding={10}
                border={"1px solid #000"}
              >
                <InternalDiv width={50} height={100} flexDirection={"column"}>
                  <TextOption>
                    Fornecedores
                    <QuebraLinha />
                  </TextOption>
                    <TextIndicator color={"#000"}>10</TextIndicator>
                </InternalDiv>
              </InternalDiv>
            </OptionDiv>
            <OptionDiv>
              <ButtonLink width={180} height={40} to="/contatos">
                Contatos
              </ButtonLink>
              <InternalDiv width={100} height={65} border={"1px solid #000"}>
                <InternalDiv width={50} height={100} flexDirection={"column"}>
                  <TextOption>
                    Contatos
                    <QuebraLinha />
                  </TextOption>
                    <TextIndicator color={"#000"}>23</TextIndicator>
                </InternalDiv>
              </InternalDiv>
            </OptionDiv>
          </MainDiv>
          <QuebraLinha />
          <QuebraLinha />
        </Main>
      </Container>
    </>
  );
}

const MainDiv = styled.div`
  height: 50%;
  width: 85%;
  align-self: center;
  display: flex;
  justify-content: space-around;
`;

const QuebraLinha = styled.br``;

const OptionDiv = styled.div`
  height: 100%;
  width: 40%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

const InternalDiv = styled.div`
  width: ${(props) => props.width + "%"};
  height: ${(props) => props.height + "%"};
  border: ${(props) => props.border};
  display: flex;
  justify-content: space-around;
  align-items: center;
  flex-direction: ${(props) => props.flexDirection};
  padding: ${(props) => props.padding + "px"};
`;

const TextOption = styled.p`
  font-size: 18px;
  text-align: center;
  margin-bottom: 10px;
`;

const TextIndicator = styled.p`
  font-size: 30px;
  font-family: var(--Jerbrains-Mono);
  color: ${(props) => props.color};
  margin: 0;
`;
