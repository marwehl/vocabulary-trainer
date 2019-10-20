import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom'
import styled from 'styled-components/macro'
import HomePage from './HomePage'
import RepeatPage from './RepeatPage'
import AddCardPage from './AddCardPage'
import Navigation from './Navigation'


export default function App() {

  let cards = [
    {german: "Wie heißt du?",
     spanish: "Como te llamas?",
     tags: ["Kennenlernen"],
     toRepeat: false,
    },
    {
      german: "Wie alt bist du?",
      spanish: "Cuantos anos tienes?",
      tags: ["Kennenlernen"],
      toRepeat: true,
    },
    {
      german: "Die Rechnung, bitte!",
      spanish: "La cuenta, por favor!",
      tags: ["Restaurant"],
      toRepeat: true,
    },
    {
      german: "Für mich bitte ein Wasser mit Kohlensäure.",
      spanish: "Para mi, agua con gas, por favor",
      tags: ["Restaurant"],
      toRepeat: false,
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
      path="/repeat"
      render={() => (
        <RepeatPage
        cards={cards.filter(card => card.toRepeat === true)}/>
      )}
      />
      <Route
      path="/add"
      render={() => (
        <AddCardPage onSubmit={addCard}/>
      )}
      />
     <Navigation/>
      </AppStyled>
    </Router>
  );


  function addCard( data) {
  cards = [{german: data.german, spanish: data.spanish, toRepeat: false}, ...cards]
  }
}

const AppStyled = styled.section`
display: grid;
grid-template-rows: auto 48px;
left: 0;
  right: 0;
  top: 0;
  bottom: 0;
  height: 100vh;
`



