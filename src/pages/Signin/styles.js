import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  gap: 10px;
  height: 100vh;
  background-color: #FF6C22;
`;

export const Imagem = styled.div`
  width: 259px;
  height: 77.54px;
  position: absolute;
  margin-top: -300px;
  margin-left: -420px;
`;

export const Content = styled.div`
  gap: 5px;
  display: flex;
  align-items: flex-start;
  justify-content: center;
  flex-direction: column;
  width: 857px;
  height: 512px;
  box-shadow: 0 1px 2px #0003;
  background-color: white;  
  padding: 20px;
  border-radius: 5px;  
`;

export const Label = styled.label`
  width: 217px;
  height: 54px;  
  font-family: 'Advent Pro';
  font-style: normal;
  font-weight: 700;
  font-size: 25px;
  color: rgba(0, 0, 0, 0.44);
  margin-top: 150px;
  margin-left: 60px;
`;

export const LabelSignup = styled.label`
  font-size: 16px;
  color: #676767;  
  font-family: 'Advent Pro';
  font-style: normal;
  font-weight: 700;
  font-size: 12px;
  line-height: 186.5%;
  margin-left: 50px; 
`;

export const labelError = styled.label`
  font-size: 14px;
  color: red;
  margin-left: 50px;
`;

export const Strong = styled.strong`
  cursor: pointer;
  a {
    text-decoration: none;
    color: #676767;
  }  
`;

export const RightBack = styled.div`
  position: absolute;
  width: 389px;
  height: 512px;
  margin-left: 468px;
`;

export const RightFront = styled.div`
  position: absolute;
  width: 414px;
  height: 413px;

  margin-top: 100px;
  margin-left: 370px;
`;

export const TextOrange = styled.label`
  color: #FF6C22;
`;


export const Icon = styled.img`  
  margin-top: 20px;
  margin-left: -20px;
  position: absolute;
  width: 24px;
  height: 24px;
`;


