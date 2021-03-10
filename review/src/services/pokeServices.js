const getPokemen = ()=>{
    return data;
}

const getPokemon = (id)=>{
    return axios.get(`https://pokeapi.co/api/v2/pokemon/${id}/`)
        .then((res) => {
            return(res.data);
        });
}