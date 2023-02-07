import React, { useState } from "react";
import Input from "../../components/Input";
import Button from "../../components/Button";
import * as C from "./styles";
import { Link, useNavigate } from "react-router-dom";
import useAuth from "../../hooks/useAuth";
import {ReactComponent as Tropa} from '../../img/tropa.svg';

import black from '../../img/rectangle.svg';
import not from '../../img/not.svg';

import Eyesvisible from '../../img/icons/eyevisible.svg'
import Eyesinvisible from '../../img/icons/eyeinvisible.svg'



const Signin = () => {
  const { signin } = useAuth();
  const navigate = useNavigate();

  const [email, setEmail] = useState("");
  const [senha, setSenha] = useState("");
  const [error, setError] = useState("");
  const [mostrarSenha, setMostrarSenha] = useState(false);

  const handleLogin = () => {
    if (!email | !senha) {
      setError("Preencha todos os campos");
      return;
    }

    const res = signin(email, senha);

    if (res) {
      setError(res);
      return;
    }

    navigate("/home");
  };

  return (
    <C.Container>
      <C.RightBack>
        <img src={black} />
      </C.RightBack>
      <C.RightFront>
        <img src={not} />
      </C.RightFront>
      <C.Imagem>
        <Tropa />
      </C.Imagem>
      <C.Content>
        <C.Label>
          Bem Vindo ao <C.TextOrange>painel</C.TextOrange>
        </C.Label>
        <Input
          type="email"
          placeholder="Digite seu e-mail"
          value={email}
          onChange={(e) => [setEmail(e.target.value), setError("")]}
        />
        <Input
          type={mostrarSenha ? "text" : "password"}
          placeholder="Digite sua senha"
          value={senha}
          onChange={(e) => [setSenha(e.target.value), setError("")]}
          iconRight={
            <C.Icon
              src={mostrarSenha ? Eyesvisible : Eyesinvisible} 
              onClick={() => setMostrarSenha(!mostrarSenha)}
            />
          }
        />
        <C.labelError>{error}</C.labelError>
        <Button Text="Acessar" onClick={handleLogin} />
        <C.LabelSignup>
          Não tem uma conta?
          <C.Strong>
            <Link to="/signup">&nbsp;Registre-se</Link>
          </C.Strong>
        </C.LabelSignup>
      </C.Content>
    </C.Container>
  );
};

export default Signin;