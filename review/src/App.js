import React, { useState, useEffect } from "react";
import "./styles.scss";
import axios from 'axios';
import data from "../data";

import SelectedPoke from './components/SelectedPoke';
import PokeList from './components/PokeList';

const getPokemen = ()=>{
  return data;
}

const getPokemon = ()=>{
  return axios.get(`https://pokeapi.co/api/v2/pokemon/${id}/`)
      .then((res) => {
        return(res.data);
      });
}

function App() {
  const [pokemen, setPokemen] = useState([]);
  const [selectedPokemon, setSelectedPokemon] = useState({});

  useEffect(() => {
    setPokemen(getPokemen());
  }, []);

  const handlePoke = (id) => {
    setSelectedPokemon(res.data);
  };

  return (
    <div className="App">
      <SelectedPoke selectedPokemon={selectedPokemon}/>
      <PokeList pokemen={pokemen} handlePoke={handlePoke}/>
    </div>
  );
}

export default App;