import React, { use, useState } from 'react';
import Country from './Country';

const Countries = ({countriesPromise}) => {
    const countriesData = use(countriesPromise);
    const countries = countriesData.countries;
    // console.log(countries);

    const [visitedCountries, setVisitedCountries] = useState([]);
    const [visitedCountriesFlag, setVisitedCountriesFlag] = useState([]);
    const handleVisitedCountries = (country, visited) => {
        if(!visited){
        const newCountry= country.name.common;
        const updatedVisitedCountries=[...visitedCountries, newCountry];
        setVisitedCountries(updatedVisitedCountries); 
        //     if(updatedVisitedCountries.includes(newCountry)){
        //      setVisitedCountries(!updatedVisitedCountries); 
        // }
        }
    }

    const handleVisitedCountriesFlag = (flag) => {
    //   const newVisitedCountriesFlag = <img src={country.flags.flags.png} alt="" />
      const updatedVisitedCountriesFlag = [...visitedCountriesFlag, flag];
      setVisitedCountriesFlag(updatedVisitedCountriesFlag);

    }
    
    return (
        <div>
                <h3>Total Countries Visited: {visitedCountries.length}</h3>
          
  <div className='flex gap-4'>
    <ol>
             {
             
             visitedCountries.map(visitedCountry => <li>{visitedCountry}</li>) }
             </ol>
       <div>
        {       
            visitedCountriesFlag.map(flag => <img className='w-[100px] h-[40px] mt-2' src={flag}></img>)
        }
        </div> 
    
</div>

        {/* <h3>Visited Countries Flag: {visitedCountriesFlag.length}</h3> */}
        {/* <div>
        {
            visitedCountriesFlag.map(flag => <img className='w-[100px] mt-2' src={flag} />)
        }
        </div> */}
    
        <div  className='grid grid-cols-3 gap-2.5'>
           {
            countries.map(country => <Country handleVisitedCountries={handleVisitedCountries} handleVisitedCountriesFlag = {handleVisitedCountriesFlag} key={country.ccn3.ccn3} country={country}></Country>)
           } 
           </div>
       
        </div>
    );
};

export default Countries;