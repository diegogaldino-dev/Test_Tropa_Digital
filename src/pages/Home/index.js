import React, { useContext } from 'react';
import { BrowserRouter, Route, Routes, useNavigate } from "react-router-dom";
import Button from "../../components/Button";
import useAuth from "../../hooks/useAuth";
import * as C from "./styles";
import Sidebar from '../../components/Sidebar'
import Card from '../../components/Card';
import Dashboard from "../Dashboard";
import Relatorios from "../Relatorios";
import Contatos from "../Contatos";
import { AuthContext } from '../../contexts/auth';

const Home = () => {
  const { user } = useContext(AuthContext);

  return (  
  <C.ContainerHome>
    <Sidebar>
      <Routes>
        <Route path="/"element={<Dashboard/>}/>
        <Route path="/dashboard"element={<Dashboard/>}/>
        <Route path="/relatorios"element={<Relatorios/>}/>
        <Route path="/contatos"element={<Contatos/>}/>
      </Routes>
    </Sidebar>
    <C.ContentContainer>
          <C.Salutation>
            Olá, <strong>{user.email}</strong>            
          </C.Salutation>
          <C.Line/>
        <C.CardContainer>
          <Card />           
          <Card />           
          <Card />           
          <Card />           
          <Card />           
        </C.CardContainer>
      </C.ContentContainer>    
  
  </C.ContainerHome>
    
  );
};

export default Home;