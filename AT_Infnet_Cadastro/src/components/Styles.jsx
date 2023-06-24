import { Link } from "react-router-dom";
import styled from "styled-components";

export const MainLG = styled.div`
  width: 50vw;
  height: 90vh;
  background-color: #fa9cde;
  z-index: 1;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
`;

export const MainH = styled.div`
  width: 85vw;
  height: 85vh;
  background-color: #fa9cde;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

export const ButtonPadrao = styled.button`
  width: ${(props) => props.width}px;
  height: ${(props) => props.height}px;
  background-color: #333;
  display: flex;
  align-items: center;
  justify-content: center;
  font-family: var(--RedHat-Mono);
  font-size: 1rem;
  color: #fff;
  cursor: pointer;
  margin: 10px;
  transition: background-color 0.5s ease;
  &:hover {
    background-color: #000;
  }
`;

export const ButtonLink = styled(Link)`
  width: ${(props) => props.width}px;
  height: ${(props) => props.height}px;
  background-color: #333;
  display: flex;
  text-decoration: none;
  align-items: center;
  justify-content: center;
  font-family: var(--RedHat-Mono);
  font-size: 1rem;
  color: #fff;
  cursor: pointer;
  margin: 10px;
  transition: background-color 0.5s ease;
  &:hover {
    background-color: #000;
  }
`;

export const InputContainer = styled.div`
  width: 190px;
  height: 50px;
  margin: 0;
  padding: 0;
`;

export const TitleInput = styled.p`
  font-size: 12px;
  font-family: var(--Space-Grotesk);
`;

export const Input = styled.input`
  border: 1px solid #000;
  width: 100%;
  height: 35px;
  margin: 0;
  padding: 5px;
  &:focus {
    outline: none;
  }
`;

export const Titulo = styled.h1`
  font-size: 40px;
  font-family: var(--Raleway);
  font-weight: 400;
  align-self: ${(props) => props.align};
  margin: ${(props) => props.topBottom} ${(props) => props.leftRight};
`;

export const Subtitulo = styled.h2`
  font-size: ${(props) => props.fontSize}px;
  font-family: var(--Raleway);
  font-weight: 200;
  align-self: ${(props) => props.align};
  margin: ${(props) => props.topBottom} ${(props) => props.leftRight};
  text-align: center;
`;

export const Indicativo = styled.h3`
  font-size: 20px;
  text-transform: uppercase;
  margin: ${(props) => props.marginBottom}px 0;
  border-bottom: 1px solid #000;
`;

export const Details = styled.p`
  font-size: 15px;
  font-family: var(--Space-Grotesk);
  margin: ${(props) => props.margin}px 0;
`;

export const Paragrafo = styled.p`
font-size: 15px;
font-family: var(--Space-Grotesk);
margin: 20px 0;
width: 50%;
text-align: center;
`
export const InputPadrao = styled.input`
  border: 1px solid #000;
  width: ${(props) => props.width};
  height: ${(props) => props.height};
  font-size: 1.2rem;
  padding: 3px 0 3px 10px;
  box-shadow: 0px 8px 5px -3px rgba(0, 0, 0, 0.1);
  font-size: 90%;
  text-align: center;
  &:focus {
    outline: none;
  }
  &::placeholder {
    color: #5517a5;
  }
`;


