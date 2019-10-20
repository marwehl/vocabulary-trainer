import React, {useState} from 'react'
import styled from 'styled-components/macro'
import Tag from "./Tag"


export default function Card ({tags, german, spanish}) {

  const [isVisible, setIsVisible] = useState(false)

  function toggleAnswer() {
    setIsVisible(!isVisible)
  }

  return (
    <CardStyled onClick={toggleAnswer}>
      <TagListStyled>
        {tags &&
        tags.map(tag => tag && <Tag text={tag} key={tag} />)}
      </TagListStyled>
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
background-color: white;
border-radius: 5px;
align-items: center;
padding: 20px;
`
 const TagListStyled = styled.section`
 `

