import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Container, Form } from "./styles";
import { construcctionGetRequests } from '../../Services/request';
import { ButtonForm } from "../../components/Buttons";
import { Button } from '../../components/Buttons/style';

export default function Constructions() {
  const navigate = useNavigate();
  const [construction, setConstruction] = useState([]);
  const [nomeObra, setNomeObra] = useState("");
  const [cidade, setCidade] = useState("");
  const [rua, setRua] = useState("");
  const [numero, setNumero] = useState("");

  const requestConstruction = async () => {
    try {
      const endpoint = '/construction';
      const user = await construcctionGetRequests(endpoint);
      if(user) setConstruction(user.data);
      return user.data;
    } catch (error) {
      console.log(error);
    }
  };

  const changePage = async (root) => {
    navigate(root);
  };

  useEffect(() => {
    requestConstruction();
  }, []);

  return (
    <Container>
      <h1>Informações sobre as Obras</h1>
      <Button onClick={ (e) => changePage("/person") }>Pessoas</Button>
      <Button onClick={ (e) => changePage("/expense") }>Lançamento de Despesas</Button>
      <Button onClick={ (e) => changePage("/allExpenses") }>Lista de Despesas</Button>
      <Button onClick={ (e) => changePage("/") }>Sair</Button>
      
        <h4>Obras Cadastradas</h4>
        <table>
            {construction && construction.map(
              (info) => (
                <tbody>
                  <td>{info.nomeObra}</td>
                  <td>{info.cidade}</td>
                  <td>{info.rua}</td>
                  <td>{info.numero}</td>

                </tbody>
                ),
            )}
        </table>
      <Form>
        <h4>Nome da Obra:</h4>
        <input
          name={"Type"}
          type={"string"}
          onChange={ (e) => setNomeObra(e.target.value) }
        />
        <h4>Cidade da Obra:</h4>
        <input
          name={"cidade"}
          type={"string"}
          onChange={ (e) => setCidade(e.target.value) }
        />
        <h4>Rua:</h4>
        <input
          name={"rua"}
          type={"string"}
          onChange={ (e) => setRua(e.target.value) }
        />
        <h4>Numero:</h4>
        <input
          name={"numero"}
          type={"string"}
          onChange={ (e) => setNumero(e.target.value) }
        />
        <ButtonForm text={"Inserir"} />
      </Form>
    </Container>
  );
}