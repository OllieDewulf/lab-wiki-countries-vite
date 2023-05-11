import React from 'react'
import { Link } from 'react-router-dom'

function CountriesList({countries}) {
    
  return (
    <div>
    {countries.map((country) => (
        <Link 
        key={country.alpha3Code}
        className="list-group-item list-group-item-action" 
        to={"/" + country.alpha3Code}
        >
        <img 
        style= {{width: "30px"}}
        src={`https://flagpedia.net/data/flags/icon/72x54/${country.alpha2Code.toLowerCase()}.png`}
        alt={`flag${country.name.common}`}
        />
        
        <p>{country.name.common}</p>
        
        </Link>
            
    )) }
            
              
  </div>
  )
}

export default CountriesList