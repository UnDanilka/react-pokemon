import React, {useEffect, useState} from 'react';
import './PokemonDetails.css';
import {Col, Row} from 'react-bootstrap';

function PokemonDetails({match}) {

    const [stateDetails, setStateDetails] = useState({
        sprites:{}
    })

    useEffect( () => {
       fetchData();
    }, []);

    const fetchData = async () => {
        let response = await fetch(`https://pokeapi.co/api/v2/pokemon/${match.params.id}`)
        .then(res=>res.json())
        setStateDetails(response)
    };

    console.log(stateDetails)

    return (
        <div className='details'>
            <Row>
            <Col md={6}>
            <h1>Name:{stateDetails.name}</h1>
            <h2>Height:{stateDetails.height}</h2>
            <h2>Weight:{stateDetails.weight}</h2>
            </Col>
            <Col md={6}>
            <img
                className='detailImg'
                src={stateDetails.sprites.front_shiny}
                alt='pokemon'
                />
            </Col>
            </Row>
        </div>
    );
}

export default PokemonDetails;