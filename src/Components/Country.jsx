import React, { useState } from 'react';
import './country.css'

const Country = ({country, handleVisitedCountries, handleVisitedCountriesFlag}) => {
    console.log(country);
    const [visited, setVisited] = useState(false);

    const handleVisited = () =>{
        if(visited){
            setVisited(false);
    }
    else {
        setVisited(true);
    }
    handleVisitedCountries(country, visited);
    handleVisitedCountriesFlag(country.flags.flags.png)
 
    }

       return (
        <div className= {`country text-center ${visited && 'bg-amber-200'}`}>
            <img src={country.flags.flags.png} alt={country.flags.flags.alt} />
           <p className='country-name mt-4'>Name: {country.name.common}</p> 
           <p className='font-medium'>
            Population: {country.population.population} 
            </p>
            <span>
            {country.population.population>2000000 ? "Big Country": "Small Country"}
            </span>
           <p className='font-medium'>Capital: {country.capital.capital[0]}</p>
           {/* <p>Currency: {country.currencies.currencies}</p> */}
           <p className='font-medium'>Region: {country.region.region}</p>
           <button onClick={handleVisited} className='text-center 
           border-green-300 mt-2'>{visited ? "Visited" : "Not Visited"}</button>
 {/* <button onClick={() => {handleVisitedCountriesFlag(country.flags.flags.png)}}>Add Visited Countries Flags</button> */}

        </div>
    );
};

export default Country;