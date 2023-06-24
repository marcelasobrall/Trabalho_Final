import styled from "styled-components";
import Aviso from '../assets/Aviso.svg'
import { Container } from "../components/Container";
import { ButtonLink, MainLG, Subtitulo } from "../components/Styles";

export default function NotFound(){

    return(
        <Container>
            <MainLG>
                <Warning />
                <Subtitulo topBottom={'25px'} fontSize={25}>Ops... Essa página não existe.</Subtitulo>
                <ButtonLink width={150} height={35} to="/">Voltar</ButtonLink>
            </MainLG>
        </Container>
    )
}

const Warning = styled.div`
background-image: url(${Aviso});
width: 50%;
height: 50%;
background-size: cover;
`
