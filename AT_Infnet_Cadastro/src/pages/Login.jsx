import { Container } from "../components/Container";
import { InputContainer, TitleInput, Input, ButtonPadrao, Indicativo, Details, MainLG as Main, ButtonLink } from "../components/Styles";
import { AuthContext } from "../contexts/AuthContext";
import { useNavigate } from 'react-router-dom'
import { useState, useContext } from 'react'
import { signInWithEmailAndPassword } from 'firebase/auth'


export default function Login() {

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const { auth, setCurrentUser, currentUser } = useContext(AuthContext);
  const redirectTo = useNavigate()

  const handleLogin = () => {
    signInWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        const user = userCredential.user;
        setCurrentUser(user)
        console.log('ok')
        redirectTo('/home')
      })
      .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
        console.log(`${errorCode} + ${errorMessage}`)
        console.log('nOk')
      });
  };

  return (
    <>
      <Container>
        {
          <Main>
            <Indicativo marginBottom={20}>Login</Indicativo>
            <InputContainer>
              <TitleInput>Login</TitleInput>
              <Input type="email" value={email} onChange={(event) => setEmail(event.target.value)}/>
            </InputContainer>
            <InputContainer>
              <TitleInput>Senha</TitleInput>
              <Input type="password" value={password} onChange={(event) => setPassword(event.target.value)}/>
            </InputContainer>
            <ButtonPadrao width={190} height={35} onClick={handleLogin}>
              Entrar
            </ButtonPadrao>
            <Details>Ou</Details>
            <ButtonLink width={120} height={30} to="/cadastro">
              Cadastro
            </ButtonLink>
          </Main>
        }
      </Container>
    </>
  );
}
