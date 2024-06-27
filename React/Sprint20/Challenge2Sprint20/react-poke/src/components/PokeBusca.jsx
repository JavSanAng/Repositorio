import React, { useState, useEffect } from "react";
import Formulario from "./Formulario";
import axios from "axios";

const PokeBusca = () => {
    const [busquedaActual, setBusquedaActual] = useState('');
    const [pokemon, setPokemon] = useState(null);
    const [cargando, setCargando] = useState(false);
    const [error, setError] = useState('');

    useEffect(() => {
        if (busquedaActual) {
            setCargando(true);
            setError('');
            axios.get(`https://pokeapi.co/api/v2/pokemon/${busquedaActual.toLowerCase()}`)
                .then(response => {
                    setPokemon(response.data);
                    setCargando(false);
                })
                .catch(error => {
                    setPokemon(null);
                    setCargando(false);
                    setError('Pokemon no encontrado');
                });
        } else {
            setPokemon(null);
        }
    }, [busquedaActual]);

    return (
        <div className="pokemon-search">
            <h1>Buscador Pokemon</h1>
            <Formulario onSearch={setBusquedaActual} />
            {cargando && <p>Cargando...</p>}
            {error && <p>{error}</p>}
            {pokemon && (
                <div className="pokemon-result">
                    <h2 style={{ textTransform: 'capitalize' }}>{pokemon.name}</h2>
                    <img src={pokemon.sprites.front_default} alt={pokemon.name} />
                    <p>Peso: {pokemon.weight / 100} kg</p>
                    <p>Altura: {pokemon.height*10} cm</p>
                </div>
            )}
        </div>
    );
};

export default PokeBusca;
