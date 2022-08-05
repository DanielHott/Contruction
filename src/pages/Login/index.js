import { InputForm } from "../../components/Input";
import { ButtonForm } from "../../components/Buttons";
import { Form, Container, GreenWall } from "./styles";


export default function Login() {
  return (
    <Container>
      <img src="/assets/co.png" width="150"alt="empresa"/>
    <Form>
        <h1>Construction Organizer</h1>
      <InputForm name={"E-mail"} />
      <InputForm name={"Senha"} type={"password"} />
      <ButtonForm text={"Entrar"} />
    </Form>
    <GreenWall>
    <h1>É Novo Por Aqui?</h1>
    <h4>Se cadastre e conheça todos os poderes da ferramenta</h4>
    <ButtonForm color={"white"} fontColor={'black'} text={"Criar"} />
    </GreenWall>
    </Container>
  );
}