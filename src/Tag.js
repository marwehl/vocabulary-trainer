import React from 'react'
import styled from 'styled-components/macro'

export default function Tag({ text }) {
  return <TagStyled>{text}</TagStyled>
}

const TagStyled = styled.div`
padding: 5px;
display: inline-block;
background-color: #e9c46a;
border-radius: 5px;
margin: 6px;
`