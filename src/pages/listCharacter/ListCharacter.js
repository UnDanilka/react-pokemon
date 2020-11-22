import React, {useEffect, useState} from 'react';
import './ListCharacter.css';
import {getAllPokemon, getPokemon} from '../../service/service';
import {Link} from 'react-router-dom';




function ListCharacter(props) {

    const [pokemonDataList, setPokemonDataList] = useState([]);

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
        setPokemonDataList(pokemonData)

    }

    console.log(pokemonDataList)

    return (
        <div className='listCharacter'>
            <ul>
                {
                pokemonDataList.map((pokemon, i) => {
                    return (
                       <Link to={`/${pokemon.id}`}> <li key={i}>{pokemon.name}</li> </Link>
                    )
                })
            }
            </ul> 
        </div>
    );
}


export default ListCharacter;