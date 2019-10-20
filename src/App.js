import React from 'react';
import Cardlist from './Cardlist'


function App() {

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
    <div className="App">
     <Cardlist cards={cards}/>
     
    </div>
  );
}

export default App;
