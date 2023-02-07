import styled from "styled-components";

export const Container = styled.div`
  display: grid;
  grid-template-columns: 260px 1fr;
`

export const ContentContainer = styled.div`
  display: flex;
  flex-direction: column;
`

export const CardContainer = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  row-gap: 30px;
`
export const Salutation = styled.h2`
  width: 115px;
  height: 47px;
  font-family: 'Advent Pro';
  font-style: normal;
  font-weight: 400;
  font-size: 25px;
  line-height: 186.5%;
  color: rgba(0, 0, 0, 0.44);
  margin-left: 40px;
  margin-top: 30px;
`

export const Line = styled.hr`
  width: 96%;
  height: 1px;
  border: 1px solid rgba(0, 0, 0, 0.1);
  transform: rotate(0.08deg);
  margin-top: 20px;
  margin-bottom: 30px;
  margin-left: 40px;
`