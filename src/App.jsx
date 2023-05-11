import './App.css'
import countriesJSON from './countries.json'
import Navbar from './components/Navbar'
import CountriesList from './components/CountriesList'
import  { React, useState } from "react";
import { Route, Routes } from 'react-router-dom'
import CountryDetails from './components/CountryDetails';

function App() { 
  const [countries, setCountries] = useState(countriesJSON);

  return (

  
    <div className='App' >
      <Navbar />
      <div style={{display: 'flex'}}> 
      <div className="container">
        <div className="row">
        <div className="col-5" style={{maxHeight: "90vh", width: "300px", overflow: "scroll"}}>
        <div className="list-group">

      <CountriesList countries = {countries} />
        </div>
        </div>
        </div>
      </div>
      <Routes>
        <Route path='/:countryId' element={<CountryDetails countries={countries}/>} />
      </Routes>
   
      </div>
 
    </div>
    
)
}
export default App