import React from 'react';
import {Card, Button} from 'react-bootstrap';
import {Link} from 'react-router-dom';


import './Cards.css';

function Cards({pokemon}) {
    return (
            <Card 
            className='card'
            style={
                {width: '90%'}
            }>
                <Card.Img className='cardImg' variant='top' src={pokemon.sprites.front_default}/>
                <Card.Body className='cardBody'>
                    <Card.Title className='text-center'>{pokemon.name}</Card.Title>
                    <Link to={`/${pokemon.id}`} className=' btn btn-link btn-link-char ' variant='dark'>Information</Link>
                </Card.Body>
            </Card>

    );
}

export default Cards;
