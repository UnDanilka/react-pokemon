import React, {useEffect, useState} from 'react';
import './Home.css';
import {getAllPokemon, getPokemon} from '../../service/service';
import Cards from '../../components/cards/Cards';



function Home(props) {

    const [pokemonData, setPokemonData] = useState([]);

    const pokemonUrl = 'https://pokeapi.co/api/v2/pokemon';

    useEffect(() => {
        const fetchData = async () => {
            let response = await getAllPokemon(pokemonUrl);
            await loadingPokemon(response.results)
        };
         fetchData();
    }, []);

    const loadingPokemon = async (data) => {
        let pokemonData = await Promise.all(data.map(async pokemon => {
            let pokemonRecord = await getPokemon(pokemon.url);
            return pokemonRecord;
        }))
        setPokemonData(pokemonData)

    }

    return (
        <div className='home'>
                {
                pokemonData.map((pokemon, i) => {
                    return <Cards key={i}
                        pokemon={pokemon}/>
                })
            } 
        </div>
    );
}


export default Home;
