'use client';

import { useState, useEffect } from 'react';
import Brewery from '@/app/components/Brewery';

const App = () =>  {
    const API_URL = "https://api.openbrewerydb.org/v1/breweries/?by_country=england";
    const [breweries, setBreweries] = useState([]);
    
    useEffect(() => {
        const fetchBreweries = async () => {
            try {
                const response = await fetch(API_URL);
                if(!response.ok){
                    throw new Error('Failed to fetch');
                }
                const data = await response.json();
                setBreweries(data);
            } catch(err) {
                console.log(err);
            }
        }

        fetchBreweries();
    }, []);
    return (
        <div>
            <ul>
                {
                    breweries
                    .map((brewery) => <li key={brewery.id}><Brewery details={brewery} /></li>)
                }
            </ul>
        </div>
    );
}

export default App;