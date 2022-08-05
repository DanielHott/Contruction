import  { InputForm }from "../../components/Input";
import { ButtonForm } from "../../components/Buttons";
import { Footer } from "../../components/Footer";
import { Form, Container, GreenWall } from "./styles";

export default function createAccount() {

    const showPass = () => {
        const password = document.getElementById('pass');
        console.log(password);
    }

  return (
    <Container>
      <img src="/assets/co.png" width="150"alt="empresa"/>
    <Form>
        <h1>Crie sua conta</h1>
      <InputForm name={"E-mail"} />
      <InputForm name={"Nome"} />
      <InputForm name={"Senha"} type={"password"} />
      <ButtonForm text={"Criar conta"} />
    </Form>
    <GreenWall>
    <h1>Já tem conta?</h1>
    <ButtonForm color={"white"} fontColor={'black'} text={"Logar"} />
    </GreenWall>
    </Container>
  );
}
