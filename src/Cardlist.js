import React from 'react'
import styled from 'styled-components'
import Card from './Card'

export default function Cardlist ({cards}) {
  return(
    <CardlistStyled>
      {cards.map(
        card => <Card {...card}/>
      )}
    </CardlistStyled>
  )
}

const CardlistStyled = styled.section`
display: grid;
grid-gap: 20px;
`