import data from "./../../data";

const fetchSelectedPoke = (id) => {
  // return axios.get(`https://pokeapi.co/api/v2/pokemon/${id}/`)
  //   .then((res) => {
  //     return(res);
  // });
  const selectedPoke = data.find(pokemon => {
    if (id === pokemon.id) {
      return true;
    }
    return false;
  });
  return Promise.resolve(selectedPoke);
};

const fetchAllPoke = () => {
  return data;
};

export default {
  fetchSelectedPoke,
  fetchAllPoke
};
