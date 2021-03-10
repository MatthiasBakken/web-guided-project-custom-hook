import { useEffect, useState } from 'react';

import { getPokemon, getPokemen} from './../services/pokeServices';

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
  
    return [pokemen, selectedPokemon, handlePoke];
}

export default usePokeState;