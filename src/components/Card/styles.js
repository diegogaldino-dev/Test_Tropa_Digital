import styled from "styled-components";

export const Container = styled.div`
  width: 500px;
  height: 228px;
  background: #FFFFFF;
  box-shadow: 0px 1px 4px rgba(0, 0, 0, 0.09);
  border-radius: 6px;
  margin-left: 40px;
`;

export const ContImg = styled.div`
  position: absolute;
  width: 463.59px;
  height: 141px;
  margin-left: 20px;
  margin-top: 10px;
`;

export const Span = styled.span`
  width: 464.81px;
  height: 26px;
  position: absolute;
  font-family: 'Advent Pro';
  font-style: normal;
  font-weight: 700;
  font-size: 14px;
  line-height: 186.5%;

  margin-top: 170px;
  margin-left: 20px;
`;

export const Description = styled.span`
  position: absolute;
  width: 464.81px;
  height: 22px;
  font-family: 'Advent Pro';
  font-style: normal;
  font-weight: 400;
  font-size: 12px;
  line-height: 186.5%;

  margin-top: 195px;
  margin-left: 20px;
`;

export const Calendar = styled.div`
  position: absolute;
  width: 101.94px;
  height: 27px;
  background: rgba(0, 0, 0, 0.5);
  border-radius: 3px;
  margin-left: 365px;
  margin-top: 20px;

  /* text-align: center;
  justify-content: center;
  align-items: center;   */
`;

export const CalendarSpan = styled.span`  
  display: flex;
  margin-top: -20px;
  margin-left: 40px;
  font-family: 'Advent Pro';
  font-style: normal;
  font-weight: 400;
  font-size: 11px;
  line-height: 186.5%;
  width: 54.61px;
  height: 21px;
  color: #FFFFFF;
`;

export const CalendarImg = styled.div`
  width: 19px;
  height: 20px;
  margin-top: 3px;
  margin-left: 5px;
`;
