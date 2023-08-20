import axios from 'axios';
import { useEffect, useState } from 'react';
import {Link, useParams} from 'react-router-dom'
function DisplayFlights() {
  const {from,to,departureDate} = useParams()
  const [flightData,setFlightData] = useState([])
  const [isLoading,setLoading]=useState(true)
  let count = 0
  useEffect(()=>{
    axios.get('http://localhost:8080/api/Flights/findFlights/'+from+'/'+to)
    .then(res=>{
      setFlightData(res.data);
      setLoading(false);
    })
  },count)
  return (
    <div className='flightdisplay'>
      <h2>Flights:</h2>
      <table bgcolor='plum'>
        <thead>
            <th>Airlines</th>
            <th>Departure City</th>
            <th>Arrival City</th>
            <th>Departure Time</th>
            <th>Arrival Time</th>
            <th>Choose Flight</th>
        </thead>
        <tbody>
          {!isLoading?flightData.map(flight=><RowCreator item={flight}/>):""}
        </tbody>
      </table>
    </div>
  );
}

function RowCreator(props){
  var flight = props.item;

  return <tr>
    <td>{flight.Carrier}</td>
    <td>{flight.From}</td>
    <td>{flight.To}</td>
    <td>{flight.Dep}</td>
    <td>{flight.Arr}</td>
    <td><Link to={'/passengerDetails/'+flight.id}>Select</Link></td>
  </tr>
  
  /*return <tr>
  <td>Vistara</td>
  <td>Delhi</td>
  <td>Mumbai</td>
  <td>1130</td>
  <td><Link to={'/passengerDetails/'+102}>Select</Link></td>
</tr>*/
}
export default DisplayFlights;

















