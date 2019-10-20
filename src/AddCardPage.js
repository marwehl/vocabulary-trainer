import React, { useState } from 'react'
import styled from 'styled-components/macro'
import Button from './Button'

export default function AddCardPage ({onSubmit}) {
return(
  <AddCardPageStyled>
  <FormStyled onSubmit={handleSubmit}>
    <LabelStyled>German:
    <InputStyled name="german">
    </InputStyled>
    </LabelStyled>
    <LabelStyled>Spanish:
      <InputStyled name="spanish">
      </InputStyled>
    </LabelStyled>
    <Button text="Add new card"></Button>
  </FormStyled>
  </AddCardPageStyled>
)

function handleSubmit(event) {
event.preventDefault()
const formData = new FormData(event.target);
const data = Object.fromEntries(formData);
onSubmit(data)
}
}

const AddCardPageStyled = styled.main`
background-color: #d35e5d;`

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