import { React } from 'react'
import { useParams, Link }  from 'react-router-dom'


function CountryDetails({countries}) {
    const {countryId} = useParams()
    const oneCountry = countries.find((elem) => {

     return elem.alpha3Code === countryId
      
    }) 
    console.log(oneCountry)

  return (
 
  <div className="col-7">
            <h1>{oneCountry.name.common}</h1>
            <table className="table">
              <thead></thead>
              <tbody>
                <tr>
                  <td style={{width: '30%'}}>Capital</td>
                  <td>{oneCountry.capital}</td>
                </tr>
                <tr>
                  <td>Area</td>
                  <td>
                    {oneCountry.area} km
                    <sup>2</sup>
                  </td>
                </tr>
                <tr>
                  <td>Borders</td>
                  <td>
                    <ul>
                    {/*work on routes*/}
                      {/* <li><Link to="/${alpha3Code}">Andorra</Link></li> */}
                     
                    </ul>
                  </td>
                </tr>
                </tbody>
                </table>
  </div>
  )
}

export default CountryDetails
