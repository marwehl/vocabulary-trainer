import React, { useState } from 'react'
import styled from 'styled-components/macro'
import Cardlist from "./Cardlist"

export default function HomePage ({cards}) {
  return(
    <HomePageStyled>
    <Cardlist cards={cards} />
    </HomePageStyled >
  )
}

const HomePageStyled = styled.main`
padding: 20px;
overflow-y: scroll;
background-color: #d35e5d;
`