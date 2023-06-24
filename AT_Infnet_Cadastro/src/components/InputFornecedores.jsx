import styled from "styled-components";
import { InputPadrao } from './Styles'


export default function InputFornecedores(props){

    return(
        <ContainerExternalInput>
                <InternalInputContainer>
                  <InputPadrao
                    placeholder="Razão Social"
                    width={"95%"}
                    height={"100%"}
                    value={props.razaoSocial}
                    onChange={(event) => {
                      props.setFornecedor({
                        ...props.fornecedor,
                        razaoSocial: event.target.value
                    })}}
                  />
                </InternalInputContainer>
                <InternalInputContainer>
                  <InputPadrao
                    placeholder="CNPJ"
                    width={"45%"}
                    height={"100%"}
                    value={props.cnpj}
                    onChange={(event) => {
                      props.setFornecedor({
                        ...props.fornecedor,
                        cnpj: event.target.value
                    })}}
                  />
                  <InputPadrao
                    placeholder="Serviço"
                    width={"45%"}
                    height={"100%"}
                    value={props.servico}
                    onChange={(event) => {
                      props.setFornecedor({
                        ...props.fornecedor,
                        servico: event.target.value
                    })}}
                  />
                </InternalInputContainer>
                <InternalInputContainer>
                  <InputPadrao
                    placeholder="Cidade"
                    width={"45%"}
                    height={"100%"}
                    value={props.cidade}
                    onChange={(event) => {
                      props.setFornecedor({
                        ...props.fornecedor,
                        cidade: event.target.value
                    })}}
                    />
                  <InputPadrao
                    placeholder="Bairro"
                    width={"45%"}
                    height={"100%"}
                    value={props.bairro}
                    onChange={(event) => {
                      props.setFornecedor({
                        ...props.fornecedor,
                        bairro: event.target.value
                    })}}
                  />
                </InternalInputContainer>
                <InternalInputContainer>
                  <InputPadrao
                    placeholder="Endereço"
                    width={"75%"}
                    height={"100%"}
                    value={props.endereco}
                    onChange={(event) => {
                      props.setFornecedor({
                        ...props.fornecedor,
                        endereco: event.target.value
                    })}}
                  />
                  <InputPadrao 
                  placeholder="Nº" 
                  width={"15%"} 
                  height={"100%"} 
                  onChange={(event) => {
                      props.setFornecedor({
                        ...props.fornecedor,
                        numero: event.target.value
                    })}}/>
                </InternalInputContainer>
                <InternalInputContainer>
                  <InputPadrao
                    placeholder="Telefone"
                    width={"33%"}
                    height={"100%"}
                    value={props.telefone}
                    onChange={(event) => {
                      props.setFornecedor({
                        ...props.fornecedor,
                        telefone: event.target.value
                    })}}
                  />
                  <InputPadrao
                    placeholder="Email"
                    width={"58%"}
                    height={"100%"}
                    value={props.email}
                    onChange={(event) => {
                      props.setFornecedor({
                        ...props.fornecedor,
                        email: event.target.value
                    })}}
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