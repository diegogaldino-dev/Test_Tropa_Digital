import React from 'react'
import * as C from "./styles";

import Img from '../../img/image.png';
import Calendario from '../../img/icons/calendar.svg'

const Card = () => {
  return (
    <C.Container>
      <C.ContImg>
        <img src={Img}/>
      </C.ContImg>      
      <C.Span>
        <span>Lorem Ipsum is simply dummy text of the printing and typesettin...</span>
      </C.Span>
      <C.Description>
        <span>Lorem Ipsum is simply dummy text of the printing and typesettin.</span>
      </C.Description>

      <C.Calendar>  
        <C.CalendarImg>
        <img src={Calendario}/>                
        </C.CalendarImg>      
        <C.CalendarSpan>2min atrás</C.CalendarSpan>
      </C.Calendar>

    </C.Container>
  )
}

export default Card