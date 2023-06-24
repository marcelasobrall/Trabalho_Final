import styled from "styled-components";
import { ArrowLeft } from "@phosphor-icons/react";
import { Link } from "react-router-dom";
import { Container } from "../components/Container";
import CardFornecedor from "../components/CardFornecedor";
import InputFornecedores from "../components/InputFornecedores";
import { MainH as Main, Titulo, Subtitulo, InputPadrao, ButtonPadrao } from "../components/Styles";
import { useState, useEffect } from "react";
import {  collection, addDoc, query, where, getDocs  } from "firebase/firestore";
import db from '../services/fbdb'

export default function Fornecedores() {
  const [fornecedor, setFornecedor] = useState({
    razaoSocial: "",
    cnpj: "",
    servico: "",
    cidade: "",
    bairro: "",
    endereco: "",
    numero: "",
    telefone: "",
    email: "",
  });
  const [searchText, setSearchText] = useState("");
  const [searchResult, setSearchResult] = useState([]);

  useEffect(() => {
    const searchFirestore = async () => {
      try {
        const q = query(collection(db, "fornecedores"), where("razaoSocial", ">=", searchText));
        const querySnapshot = await getDocs(q);
        const data = querySnapshot.docs.map((doc) => doc.data());
        setSearchResult(data); 
      } catch (error) {
        console.log("Erro ao buscar no Firestore:", error);
      }
    };

    searchFirestore();

  }, [searchText]);


  const handleCadastro = async () => {
    const fornecedorData = {
      razaoSocial: fornecedor.razaoSocial,
      cnpj: fornecedor.cnpj,
      servico: fornecedor.servico,
      cidade: fornecedor.cidade,
      bairro: fornecedor.bairro,
      endereco: fornecedor.endereco,
      numero: fornecedor.numero,
      telefone: fornecedor.telefone,
      email: fornecedor.email,
    };

    try {
      const docRef = await addDoc(
        collection(db, "fornecedores"),
        fornecedorData
      );
      console.log(docRef);
      console.log("Documento cadastrado com ID:", docRef.id);
    } catch (error) {
      console.error("Erro ao cadastrar o fornecedor:", error);
    }
  }

    return (
      <>
        <Container>
          <Main>
            <Header>
              <Link to="/home">
                <Arrow size={25} />
              </Link>
              <Titulo>Fornecedores</Titulo>
            </Header>
            <ContainerOptions>
              <Subtitulo>Cadastro</Subtitulo>
              <Subtitulo>Listagem</Subtitulo>
            </ContainerOptions>
            <ContainerMain>
              <ContainerLR>
                <InputFornecedores
                  fornecedor={fornecedor}
                  setFornecedor={setFornecedor}
                />
                <ButtonPadrao width={150} height={40} onClick={handleCadastro}>
                  Cadastrar
                </ButtonPadrao>
              </ContainerLR>
              <ContainerLR>
                <DivSearch>
                  <InputPadrao
                    width={"75%"}
                    height={"35%"}
                    placeholder="Busca"
                    value={searchText}
                    onChange={(event) => setSearchText(event.target.value)}/>
                  <ButtonAll>All</ButtonAll>
                </DivSearch>
                <DivResults>
                  {searchResult.map((item) => (
                    <CardFornecedor
                      key={item.id}
                      razaoSocial={item.razaoSocial}
                      cnpj={item.cnpj}
                      servico={item.servico}
                      cidade={item.cidade}
                      bairro={item.bairro}
                      endereco={item.endereco}
                      numero={item.numero}
                      telefone={item.telefone}
                      email={item.email}
                    />
                  ))}
                </DivResults>
              </ContainerLR>
            </ContainerMain>
          </Main>
        </Container>
      </>
    );
  }

const Header = styled.header`
  width: 100%;
  height: 10%;
  display: flex;
  align-items: center;
`;

const Arrow = styled(ArrowLeft)`
  margin: 0px 50px 0 25px;
`;

const ContainerOptions = styled.div`
  display: flex;
  gap: 25px;
  position: relative;
  top: -15px;
`;

const ContainerMain = styled.div`
  width: 90%;
  height: 90%;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const ContainerLR = styled.div`
  width: 50%;
  height: 90%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

const DivSearch = styled.div`
  width: 470px;
  height: 115px;
  border: 1px solid #000;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: #e2e2e2;
`;

const ButtonAll = styled.button`
  border: 0.5px solid #999;
  width: 60px;
  height: 35px;
  background-color: #fff;
  cursor: pointer;
  margin: 0 0 0 10px;
  background-color: #dcdcdc;
  &:hover {
    text-decoration: underline;
    background-color: #aaa;
    color: #000;
  }
  &:active {
    background-color: #999;
    color: #fff;
  }
`;

const DivResults = styled.div`
  justify-self: flex-start;
  width: 470px;
  height: 300px;
  overflow: auto;
  overflow-y: auto;
  ::-webkit-scrollbar {
    width: 0;
  }

  ::-webkit-scrollbar-thumb {
    background-color: rgba(19, 39, 219, 0.836);
  }

  ::-webkit-scrollbar-track {
    background-color: rgba(0, 0, 0, 0.1);
  }
`;

