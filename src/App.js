import Container from "./components/Container";
import Header from "./components/Header";
import styled from "styled-components";
import Welcome from "./components/Welcome"; //tenemos img, del componente welcome
import CharaterContainer from "./components/CharaterContainer";
import { useState } from "react";

function App() {
  const [character, setCharacter] = useState(null);

  const reqApi = async () => { // aca estamos llamando la api de forma asincronica
    const api = await fetch("https://thesimpsonsquoteapi.glitch.me/quotes?count=3"); // aca va el link de la api 
    const frase = await api.json();
    setCharacter(frase);
  };

  return (// dependiendo de la accion aparece o welcome o characterContainer
    <div>
      <Container>
        <Header />
        {!character ? (
          <Welcome reqApi={reqApi}/>
        ):(
          <CharaterContainer character={character} reqApi={reqApi}/>
        )}
      </Container>
    </div>
  );
}



export default App;
