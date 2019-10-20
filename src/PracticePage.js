import React, { useState } from 'react'
import styled from 'styled-components/macro'
import Cardlist from "./Cardlist"

export default function PracticePage ({filteredCards}) {
  return (
    <Cardlist cards={filteredCards}/>
  )
}