import React, { useEffect, useState } from 'react';
import { Link, useParams } from 'react-router-dom';
import axios from 'axios';
import '../styles/styles.css'

const Coin = () => {
    const { id } = useParams();
    const [coin, setCoin] = useState(null);


    useEffect(() => {
        const getCoin = async () => {
            try {
                const response = await axios.get(`https://api.coincap.io/v2/assets/${id}`);
                setCoin(response.data.data);
            } catch (error) {
                console.error('Error fetching the coin data:', error);
            }
        };
        getCoin()
    }, [id]);

    if (!coin) {
        return <div>Cargando...</div>;
    }

    return (
        <>
            <Link to={'/'}>Home</Link>
            <h1> {coin.name}</h1>
            <p>Rank: {coin.rank}</p>
            <p>Symbol: {coin.symbol}</p>
            <p>Price: {coin.priceUsd}</p>
            <p>Volume: {coin.volumeUsd24h}</p>
            <p>Market Cap: {coin.marketCapUsd}</p>
        </>
    )
}

export default Coin;

