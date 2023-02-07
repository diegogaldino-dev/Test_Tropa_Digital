import React from 'react'
import * as C from './style'

const Input = ({type, placeholder, value, onChange, iconRight}) => {
  return (
    <C.InputWrapper>
      <C.Input
        value={value}
        onChange={onChange}
        type={type}
        placeholder={placeholder}
      />
      {iconRight && iconRight}
    </C.InputWrapper>
  )
}

export default Input