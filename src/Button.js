import React from 'react'
import styled from 'styled-components/macro'

export default function Button({ text }) {
  return <ButtonStyled>{text}</ButtonStyled>
}

const ButtonStyled = styled.button`
padding: 10px;
border-radius: 5px;
border: 3px solid #e9c46a;
color: #e9c46a;

&:active {
  background-color: #e9c46a;
  color: black;
}
`