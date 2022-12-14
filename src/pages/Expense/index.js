import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Container, Form } from "./styles";
import { construcctionGetRequests } from '../../Services/request';
import { Button } from '../../components/Buttons/style';

export default function Expense() {
  const navigate = useNavigate();
  const [construction, setConstruction] = useState([]);
  const [type, setType] = useState("");
  const [local, setLocal] = useState("");
  const [price, setPrice] = useState("");
  const [image, setImage] = useState("");

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
      <h1>Lançamento de custos</h1>
      <Button onClick={ (e) => changePage("/constructions") }>Construções</Button>
      <Button onClick={ (e) => changePage("/person") }>Pessoas</Button>
      <Button onClick={ (e) => changePage("/") }>Sair</Button>
      <Form>
        <h4>Obra:</h4>
        <select>
            {construction && construction.map(
              (info) => (
                  <option>{info.nomeObra}</option>
                ),
            )}
        </select>
        <h4>Tipo de Gasto:</h4>
        <input
          name={"Type"}
          type={"string"}
          onChange={ (e) => setType(e.target.value) }
        />
        <h4>Local/Loja:</h4>
        <input
          name={"Local"}
          type={"string"}
          onChange={ (e) => setLocal(e.target.value) }
        />
        <h4>Valor Total:</h4>
        <input
          name={"Valor"}
          type={"string"}
          onChange={ (e) => setPrice(e.target.value) }
        />
        <h4>Imagem do Recibo:</h4>
        <input
          name={"Image"}
          type={"string"}
          onChange={ (e) => setImage(e.target.value) }
        />
      </Form>
    </Container>
  );
}