import React from 'react';

export const getAllPokemon = async (url) => {
    return new Promise((resolve, reject)=>{
        fetch(url)
        .then(res=>res.json())
        .then(res=>resolve(res));
    })
};

export const getPokemon = async(url)=>{
    return new Promise((resolve, reject)=>{
        fetch(url)
        .then(res=>res.json())
        .then(res=>resolve(res));
    })
}

