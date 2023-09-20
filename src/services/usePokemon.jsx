import { useEffect, useState } from "react";

function usePokemon() {
  const [pokemon, setPokemon] = useState("pikachu");
  const [data, setData] = useState(null);
  const [all, setAll] = useState(null);
  const [filtered, setFiltered] = useState([]);

  const getData = async (url, setDatos) => {
    const res = await fetch(url);
    const datos = await res.json();

    setDatos(datos);
  };

  useEffect(() => {
    getData("https://pokeapi.co/api/v2/pokemon?limit=100000", setAll);
  }, []);

  useEffect(() => {
    getData(`https://pokeapi.co/api/v2/pokemon/${pokemon}`, setData);
  }, [pokemon]);

  const handleSubmit = (e) => {
    e.preventDefault();
    const pokName = e.target[0].value;
    setPokemon(pokName);
  };

  const handleClick = (e) => {
    const pokeName = e.target.value;
    setPokemon(pokeName);
    setFiltered([])
  };

  const handleOnChange = (e) => {
    const value = e.target.value.toLowerCase();
    const dataFiltered =
      value === ""
        ? []
        : all.results.filter((pokemon) => pokemon.name.includes(value));
    setFiltered(dataFiltered);
  };

  return { data, filtered, handleSubmit, handleClick, handleOnChange };
}

export default usePokemon;
