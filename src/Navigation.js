import React from 'react'
import { NavLink } from 'react-router-dom'
import styled from 'styled-components'

export default function Navigation () {
  return (
    <NavigationStyled>
      <LinkStyled to="/">
       Home
      </LinkStyled>
      <LinkStyled to="/practice">
        Practice
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
`