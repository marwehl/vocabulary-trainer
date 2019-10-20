import React, { useState } from 'react'
import styled from 'styled-components/macro'

export default function AddCardPage () {
return(
  <FormStyled>
    <LabelStyled>German:
    <InputStyled>
    </InputStyled>
    </LabelStyled>
    <LabelStyled>Spanish:
      <InputStyled>
      </InputStyled>
    </LabelStyled>
  </FormStyled>
)
}

const FormStyled = styled.form`
  display: grid;
  padding: 20px;
  gap: 16px;
  overflow-y: scroll;
  -ms-overflow-style: none;
  scrollbar-width: none;
`;

const LabelStyled = styled.label`
  display: grid;
  gap: 0.5px;
`;

const InputStyled = styled.input`
  padding: 7px;
  border: 1px solid black;
  border-radius: 10px;
  font-size: 1.1em;
  &: active {
    border-color: #e87613;
  }
  &: focus {
    border-color: #e87613;
  }
  `