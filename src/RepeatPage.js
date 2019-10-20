import React, { useState } from 'react'
import styled from 'styled-components/macro'
import Cardlist from "./Cardlist"

export default function RepeatPage ({cards}) {
  return (
    <RepeatPageStyled>
    <Cardlist cards={cards}/>
    </RepeatPageStyled>
  )
}

const RepeatPageStyled = styled.main`
padding: 20px;
overflow-y: scroll;
background-color: #d35e5d;
`