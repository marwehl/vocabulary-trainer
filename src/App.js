import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom'
import styled from 'styled-components/macro'
import HomePage from './HomePage'
import PracticePage from './PracticePage'
import AddCardPage from './AddCardPage'
import Navigation from './Navigation'


export default function App() {

  const cards = [
    {german: "Wie heißt du?",
     spanish: "Como te llamas?",
     tags: "Kennenlernen",
    },
    {
      german: "Wie alt bist du?",
      spanish: "Cuantos anos tienes?",
      tags: "Kennenlernen",
    },
    {
      german: "Die Rechnung, bitte!",
      spanish: "La cuenta, por favor!",
      tags: "Restaurant",
    },
    {
      german: "Für mich bitte ein Wasser mit Kohlensäure.",
      spanish: "Para mi, agua con gas, por favor",
      tags: "Restaurant",
    }
  ]
  return (
  <Router>
    <AppStyled>
      <Route exact
      path="/"
      render={() => (
        <HomePage
        cards={cards}
        />
      )}
      />
      <Route
      path="/practice"
      render={() => (
        <PracticePage
        cards={cards.filter(card => card.toPractice === true)}/>
      )}
      />
      <Route
      path="/add"
      render={() => (
        <AddCardPage/>
      )}
      />
  
     <Navigation/>
     
      </AppStyled>
    </Router>
  );
}

const AppStyled = styled.section`
display: grid;
grid-template-rows: auto 48px;
padding: 20px;
`



