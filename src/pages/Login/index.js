import React, { useEffect, useState } from 'react';
import { InputForm } from "../../components/Input";
import { ButtonForm } from "../../components/Buttons";
import { Form, Container, GreenWall } from "./styles";
import { loginRelatedRequests } from '../../Services/request';


export default function Login() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [isLogged, setIsLogged] = useState(false);
  const [role, setRole] = useState('');

  const loginSubmit = async (event) => {
    event.preventDefault();
    try {
      const endpoint = '/login';
      const user = await loginRelatedRequests(endpoint, { email, password });
      localStorage.setItem('user', JSON.stringify(user.data));
      setRole(user.data.role);
      setIsLogged(true);
    } catch (error) {
      console.log(error);
      setIsLogged(false);
    }
  };

  useEffect(() => {
    const localUser = JSON.parse(localStorage.getItem('user'));
    if (localUser) {
      setRole(localUser.role);
      setIsLogged(true);
    }
  }, []);

  return (
    <Container>
      <img src="/assets/co.png" width="150"alt="empresa"/>
    <Form onSubmit={ loginSubmit }>
        <h1>Construction Organizer</h1>
      <InputForm name={"E-mail"} onChange={ (e) => setEmail(e.target.value) }/>
      <InputForm
        name={"Senha"}
        type={"password"} 
        onChange={ (e) => setPassword(e.target.value) }
      />
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