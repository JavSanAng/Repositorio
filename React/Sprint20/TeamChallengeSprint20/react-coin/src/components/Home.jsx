import { Link } from 'react-router-dom';
import React, { useState, useEffect } from 'react';
import axios from 'axios';
import '../styles/styles.css'

function Home() {
    const link = "https://api.coincap.io/v2/assets/";
    const [coinInfo, setCoinInfo] = useState([]);
    useEffect(() => {
        const getCoins = async () => {
            try {
                const response = await axios.get(link)
                setCoinInfo(response.data.data)
            } catch {
                alert('Dont make the fetch')
            }
        }
        getCoins()
    }, [])
    return (
        <>
            <div className='home'>
                <h1>Principales Criptomonedas</h1>
                <ul>
                    {coinInfo.map(element => (
                        <li key={element.id}>
                            <Link to={`/coin/${element.id}`}>{element.name}</Link>
                        </li>
                    ))}
                </ul>
            </div>
        </>
    );
}


export default Home;


