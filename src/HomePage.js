import React, { useState } from 'react'
import styled from 'styled-components/macro'
import Cardlist from "./Cardlist"

export default function HomePage ({cards}) {
  return(
    <Cardlist cards={cards} />
  )
}