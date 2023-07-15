"use client"
import { useState, useEffect } from "react";


export default function Results({data}) {

    useEffect(() => {
        console.log(data);
        console.log('data')
    }, [data]);
    

    return (
        <div>

            {data?.map((game) => (

                <div>
                    <img src={game.image} alt={game.title} />
                    <h2 style={{ color: 'white' }}>{game.title}</h2>
                    <p style={{ color: 'white' }}>Precio 1: {game.price1}</p>
                    <p style={{ color: 'white' }}>Precio 2: {game.price2}</p>
                    <a href={game.url1}>Enlace 1</a>
                    {game.url2 && <a href={game.url2}>Enlace 2</a>}
                </div>
            ))}
        </div>
      );
}
