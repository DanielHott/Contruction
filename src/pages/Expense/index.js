import React, { useEffect, useState } from 'react';
import { Container } from "./styles";
import { ButtonForm } from "../../components/Buttons";
import { construcctionGetRequests } from '../../Services/request';

export default function Expense() {
  const [construction, setConstruction] = useState([]);

  const requestConstruction = async () => {
    try {
      const endpoint = '/construction';
      const user = await construcctionGetRequests(endpoint);
      return user.data;
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    const request = requestConstruction();
    if(request) setConstruction(request);
  }, []);

  return (
    <Container>
      <ButtonForm text={"Construções"} />
      <ButtonForm text={"Pessoas"} />
      <h1>Lançamento de custos</h1>
      Obras: 
      <select name="topic" id="topic">
        {(construction && construction.forEach((element) => <>{element.nomeObra}</>  ))};
      </select>


    </Container>
  );
}