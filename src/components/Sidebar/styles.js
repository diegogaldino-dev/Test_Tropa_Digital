import styled from "styled-components";
import { NavLink } from "react-router-dom";

export const Container = styled.div `

`;

export const Sidebar = styled.div`
  background-color: #FFFFFF;
  color: #fff;
  position: absolute;
  width: 260px;
  height: 100%;
`;

export const TopSection = styled.div`
  display: flex;
  align-items: center;
  padding: 20px 15px;
  margin-bottom: 140px;
`;

export const Logo = styled.div`
 
`;

export const Imagem = styled.img`
  position: absolute;
  width: 190px;
  height: 56.88px;
  margin-left: 18px;
  margin-top: 50px;
`;

export const Icon = styled.img`
  svg {
    path {
      fill: ${props => props.active ? "orange" : "black"};
    }
  }
`;

export const LinkText = styled.div`
  display: flex;
  height: 50px;
  margin-left: 35px;
  margin-top: 10px;
  margin-right: 12px;
  font-family: 'Advent Pro';
  font-style: normal;
  font-weight: 600;
  font-size: 14px;
  line-height: 186.5%;
  padding: 10px;
  background-color: #2EAFB2;  
  border-radius: 5px;
  color: #fff;
  gap: 5px;
    & svg{
      margin-top: 4px;
    }
`;

export const Links = styled.a `
  text-decoration: none;
`;

export const StyledLink = styled(NavLink)`
  text-decoration: none;
  justify-content: start;
  color: ${(props) => props.active ? "#000" : "#fff"};

  ${LinkText} {
    background-color: ${(props) => props.active ? "#F3F3F3" : "#2EAFB2"};
    margin-right: ${(props) => props.active ? "0" : "12px"};
    transition: 0.4s;
    color: ${(props) => props.active ? "#000" : "#FFF"};
  };
`;


