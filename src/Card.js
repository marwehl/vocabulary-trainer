import React, {useState} from 'react'
import styled from 'styled-components/macro'


export default function Card ({tags, german, spanish}) {

  const [isVisible, setIsVisible] = useState(false)

  function toggleAnswer() {
    setIsVisible(!isVisible)
  }

  return (
    <CardStyled onClick={toggleAnswer}>
      <div>{tags}</div>
      <p>{german}</p>
        {isVisible &&
      <p>{spanish}</p>
        }
      </CardStyled>
  )
}

const CardStyled = styled.section`
display: flex;
flex-direction: column;
border: 2px solid;
`

