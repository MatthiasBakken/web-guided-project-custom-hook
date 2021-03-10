import React, { useState, useEffect } from "react";
import "./styles.scss";
import { getPokemen, getPokemon } from './services/pokeServices';


import SelectedPoke from './components/SelectedPoke';
import PokeList from './components/PokeList';


const usePokeState = () => {
  const [pokemen, setPokemen] = useState([]);
  const [selectedPokemon, setSelectedPokemon] = useState({});

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

function App() {
  const [] = usePokeState();
  
  
  return (
    <div className="App">
      <SelectedPoke selectedPokemon={selectedPokemon}/>
      <PokeList pokemen={pokemen} handlePoke={handlePoke}/>
    </div>
  );
}

export default App;