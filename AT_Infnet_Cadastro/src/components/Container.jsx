import styled from 'styled-components'

export const Container = (props) => <DivContainer>{props.children}</DivContainer>

const DivContainer = styled.div`
width: 100vw;
height: 100vh;
border: 1px solid #fff;
background-color: "#d32c2c44";
background-size: cover;
display: flex;
justify-content: center;
align-items: center;
`