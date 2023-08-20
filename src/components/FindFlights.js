import { useState } from "react";
import {useNavigate} from "react-router-dom"
//import axios from "axios";

function FindFlights() {
  const[from,setFrom] = useState('')
  const[to,setTo] = useState('')
  const[departureDate,setDepartureDate] = useState('')
  const navigate = useNavigate()

  
  const handleSubmit=(event)=>{
    event.preventDefault();
    console.log("From: "+from+", To: "+to);
      /*fetch('http://localhost:8080/api/Flights/search', {
         method: 'POST',
         body: JSON.stringify({
            From: from,
            To: to
            
         }),
         headers: {
            'Content-type': 'application/json; charset=UTF-8',
         },
      })
         .then((res) => res.json())
         .then((post) => {
           setFrom('');
            setTo('');
         })
         .catch((err) => {
            console.log(err.message);
         });*/
         navigate('/displayFlights/'+from+'/'+to+'/'+departureDate)

    

    /*axios.post("http://localhost:8080/api/Flights/search", {
      From: from,
      To: to
    })
    .then((response) => {
      console.log(response);
    });
*/
  }

  return (
    <div className="flightfind">

      <h2>Find Flights</h2>
      <form>
      From: <input type="text" name="from" onChange={e=>setFrom(e.target.value)}/><br></br><br></br>
      To: <input type="text" name="to" onChange={e=>setTo(e.target.value)}/><br></br><br></br>
      Departure Date: <input type="text" name="departureDate" onChange={e=>setDepartureDate(e.target.value)}/><br></br><br></br>
      <input type="button" onClick={handleSubmit.bind(this)} value={"Search"}/><br></br><br></br>
      </form>
     
    </div>
  );
}

export default FindFlights;
