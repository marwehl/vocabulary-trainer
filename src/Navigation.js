import React from 'react'
import { NavLink } from 'react-router-dom'
import styled from 'styled-components'

export default function Navigation () {
  return (
    <NavigationStyled>
      <LinkStyled exact to="/">
       Home
      </LinkStyled>
      <LinkStyled to="/repeat">
        Repeat
      </LinkStyled>
      <LinkStyled to="/add">
       Add new
      </LinkStyled>
 
    </NavigationStyled>
  )
}

const NavigationStyled = styled.nav`
display: grid;
grid-auto-flow: column;
gap: 1px;
`

const LinkStyled = styled(NavLink)`
  font-size: 1.3em;
  flex-grow: 1;
  color: inherit;
  text-decoration: none;
  display: flex;
  justify-content: center;
  align-items: center;
  background: white;
  &.active {
    color: #e9c46a;
  }
`