import React from "react";
import "./styles.scss";


import SelectedPoke from './components/SelectedPoke';
import PokeList from './components/PokeList';


const initialValues = {
  pokemen: [],
  selectedPokemon: {}
}

function App() {
  const [pokemen, selectedPokemon, handlePoke] = usePokeState(initialValues);
  
  return (
    <div className="App">
      <SelectedPoke selectedPokemon={selectedPokemon}/>
      <PokeList pokemen={pokemen} handlePoke={handlePoke}/>
    </div>
  );
}

export default App;