import { Fragment } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "../pages/Home"
import Signin from "../pages/Signin";
import Signup from "../pages/Signup";
import Contatos from "../pages/Contatos";
import Relatorios from "../pages/Relatorios";
import useAuth from "../hooks/useAuth";

const Private = ({ Item }) => {
  const { signed } = useAuth()

  return signed > 0 ? <Item /> : <Signin />;
}

const RoutesApp = () => {
  return(
    <BrowserRouter>
      <Fragment>
        <Routes>
          <Route exact path="/home" element={<Private Item={Home} />} />
          {/* <Route exact path="/contatos" element={<Private Item={Contatos} />} /> */}
          <Route exact path="/contatos" element={<Contatos />} />
          <Route path="/" element={<Signin />} />
          <Route exact path="/signup" element={<Signup />} />
          <Route exact path="/relatorios" element={<Relatorios />} />
          {/* <Route path="*" element={<Signin />} />     */}
        </Routes>
      </Fragment>
    </BrowserRouter>
  );
}

export default RoutesApp