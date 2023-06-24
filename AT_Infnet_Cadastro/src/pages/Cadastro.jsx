import { Container } from "../components/Container";
import { InputContainer, TitleInput, Input, ButtonPadrao, Titulo, Indicativo, Details, MainH as Main, ButtonLink } from "../components/Styles";
import { createUserWithEmailAndPassword, updateProfile } from 'firebase/auth'
import { AuthContext } from "../contexts/AuthContext";
import { useContext, useState } from 'react'

export default function Cadastro() {
  const { auth } = useContext(AuthContext);
  const [userData, setUserData] = useState({
    name: '',
    email: '',
    password: '',
  });

  const handleChange = (event) => {
    const { name, value } = event.target;
    setUserData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSignUp = () => {
    createUserWithEmailAndPassword(auth, userData.email, userData.password)
      .then((userCredential) => {
        const user = userCredential.user;
        console.log('Cadastro OK')
        const nomeDoUsuario = userData.name;
        return updateProfile(user, { displayName: userData.name });
      })
      .then(() => {
        console.log('Nome de usuario OK')
      })
      .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
        console.log('Deu errado')
      });
  }

  return (
    <Container>
      <Main>
        <Indicativo marginBottom={20}>Cadastro</Indicativo>
        <InputContainer>
          <TitleInput>Nome</TitleInput>
          <Input type="text" name="name" value={userData.name} onChange={handleChange} />
        </InputContainer>
        <InputContainer>
          <TitleInput>Login</TitleInput>
          <Input type="email" name="email" value={userData.email} onChange={handleChange} />
        </InputContainer>
        <InputContainer>
          <TitleInput>Senha</TitleInput>
          <Input type="password" name="password" value={userData.password} onChange={handleChange} />
        </InputContainer>
        <ButtonPadrao width={190} height={35} onClick={handleSignUp}>
          Cadastrar
        </ButtonPadrao>
        <Details>Ou</Details>
        <ButtonLink width={120} height={30} to="/">
          Login
        </ButtonLink>
      </Main>
    </Container>
  );
}
