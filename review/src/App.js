import React, { useState, useEffect } from "react";
import "./styles.scss";
import { getPokemen, getPokemon } from './services/pokeServices';


import SelectedPoke from './components/SelectedPoke';
import PokeList from './components/PokeList';


const usePokeState = (initialValues) => {
  const [pokemen, setPokemen] = useState(initialValues.pokemen);
  const [selectedPokemon, setSelectedPokemon] = useState(initialValues.selectedPokemon);

  useEffect(() => {
    setPokemen(getPokemen());
  }, []);

  const handlePoke = (id) => {
    getPokemon(id)
      .then(data => {
        setSelectedPokemon(data);
      });
  };
}

const initialValues = {
  pokemen: [],
  selectedPokemon: {}
}

function App() {
  const [] = usePokeState(initialValues);
  
  
  return (
    <div className="App">
      <SelectedPoke selectedPokemon={selectedPokemon}/>
      <PokeList pokemen={pokemen} handlePoke={handlePoke}/>
    </div>
  );
}

export default App;