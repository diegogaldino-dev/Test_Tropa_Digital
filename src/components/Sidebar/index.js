import React, { useEffect, useState } from 'react'
import { NavLink, useLocation } from 'react-router-dom';
import * as C from "./styles";

import Logo from '../../img/tropa.svg';

import Inicio from '../Icons/Inicio';
import Contato from '../Icons/Contato';
import Relatorio from '../Icons/Relatorio';

const menuItem = [
  {
    path: '/home',
    name: 'Inicio',
    icon: (fill) => <Inicio fill={fill} />,
  },
  {
    path: '/contatos',
    name: 'contatos',
    icon: (fill) => <Contato fill={fill} />,
  },
  {
    path: '/relatorios',
    name: 'relatorios',
    icon: (fill) => <Relatorio fill={fill} />,
  },    
  {
    path: '/contatos',
    name: 'contatos',
    icon: (fill) => <Contato fill={fill} />,
  },
]

const Sidebar = () => {
  const [activeMenu, setActiveMenu] = useState('/');
  const location = useLocation();
  
  useEffect(() => {
    setActiveMenu(location.pathname);
  }, [location])

  return (
    <C.Container>
      <C.Sidebar>
        <C.TopSection>
          <C.Logo>            
            <C.Imagem img src={Logo}/>
          </C.Logo>
        </C.TopSection>
        <C.Links>
        {
          menuItem.map((item)=>(
            <C.StyledLink to={item.path} key={item.path} active={item.path === activeMenu}>
              <C.LinkText active={item.path === activeMenu}>
                {item.icon(item.path === activeMenu ? 'orange' : 'white')}
                {item.name}
              </C.LinkText>
            </C.StyledLink>
          ))
        }
        </C.Links>
      </C.Sidebar>
    </C.Container>
  )
}

export default Sidebar