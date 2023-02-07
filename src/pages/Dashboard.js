import React, { useContext } from 'react';
import Card from '../components/Card';
import * as C from "./styles";
import Sidebar from '../components/Sidebar'
import { AuthContext } from '../contexts/auth';

const Dashboard = () => {
  const { user } = useContext(AuthContext);
  return (
    <C.Container>
      <Sidebar/>
      <C.ContentContainer>
          <C.Salutation>
            Olá, <strong>{user.email}</strong>
          </C.Salutation>
        <C.CardContainer>
          <Card />           
          <Card />           
          <Card />           
          <Card />           
          <Card />           
        </C.CardContainer>
      </C.ContentContainer>
    </C.Container>
  )
}

export default Dashboard